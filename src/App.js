import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import QueueList from './components/QueueList/QueueList';
import AddQueueForm from './components/AddQueueForm/AddQueueForm';

import { ThemeHandlerProvider } from './components/ThemeHandler/ThemeHandler';

function App() {
  document.body.style.backgroundColor = localStorage.getItem("theme") === "dark" ? "#444" : "#ffffff";

  const [formState, setFormState] = useState(false);
  const [queues, setQueues] = useState({});
  const [queueId, setQueueId] = useState(localStorage.getItem('queueId') ? parseInt(localStorage.getItem('queueId')) : 0);

  useEffect(() => {
    const savedQueues = JSON.parse(localStorage.getItem('queues'));
    if (savedQueues) {
      setQueues(savedQueues);
    }
  }, []);

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