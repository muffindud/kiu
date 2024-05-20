import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import QueueList from './components/QueueList/QueueList';
import AddQueueForm from './components/AddQueueForm/AddQueueForm';

import { ThemeHandlerProvider } from './components/ThemeHandler/ThemeHandler';
import { api_host, api_pass } from './config';

function App() {
  document.body.style.backgroundColor = localStorage.getItem("theme") === "dark" ? "#444" : "#ffffff";

  const [formState, setFormState] = useState(false);
  const [queues, setQueues] = useState({});
  const [queueId, setQueueId] = useState(0);

  useEffect(() => {
    const savedQueues = JSON.parse(localStorage.getItem('queues'));
    const savedQueueId = parseInt(localStorage.getItem('queueId'));
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (savedQueueId) {
      setQueueId(savedQueueId);
    } else if (savedQueues && Object.keys(savedQueues).length > 0){
      setQueueId(Object.keys(savedQueues).length);
      localStorage.setItem('queueId', Object.keys(savedQueues).length);
    } else {
      setQueueId(0);
      localStorage.setItem('queueId', queueId);
    }
    
    if (savedQueues) {
      setQueues(savedQueues);
    }
    
    if (!refreshToken) {
      fetch(api_host + "/token", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({password:api_pass, read:true, write:true, delete:true, update:true}),
      })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('refreshToken', data.refresh_token);
          sessionStorage.setItem('accessToken', data.access_token);
        })
        .catch(err => console.log(err));
    } else {
      fetch(api_host + "/refresh", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refreshToken}`
        }
      })
        .then(response => {
          if (response.status === 401) {
            fetch(api_host + "/token", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({password:api_pass, read:true, write:true, delete:true, update:true}),
            })
            .then(response => response.json())
            .then(data => {
              localStorage.setItem('refreshToken', data.refresh_token);
              sessionStorage.setItem('accessToken', data.access_token);
            })
            .catch(err => console.log(err));
          } else if (response.status === 200) {
            sessionStorage.setItem('accessToken', response.json().access_token);
          }
        })
        .catch(err => console.log(err));
    }
  }, [api_host, api_pass, queueId]);

  const handleAddQueue = (queue) => {
    setQueues({...queues, [queueId]: queue});
    localStorage.setItem('queues', JSON.stringify({...queues, [queueId]: queue}));
    setQueueId(queueId + 1);
    localStorage.setItem('queueId', queueId + 1);
  }

  const handleDeleteQueue = (queueId) => {
    const newQueues = queues;
    delete newQueues[queueId];
    setQueues(newQueues);
    localStorage.setItem('queues', JSON.stringify(newQueues));
  };

  return (
    <ThemeHandlerProvider>
      <Navbar 
        setFormState={setFormState}
      />
      <QueueList 
        queues={queues}
        handleDeleteQueue={handleDeleteQueue}
      />
      {formState && <AddQueueForm 
        setFormState={setFormState}
        handleAddQueue={handleAddQueue}
      />}
    </ThemeHandlerProvider>
  );
}

export default App;