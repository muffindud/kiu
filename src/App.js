import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import QueueList from './components/QueueList/QueueList';
import AddQueueForm from './components/AddQueueForm/AddQueueForm';

import { ThemeHandlerProvider } from './components/ThemeHandler/ThemeHandler';

function App() {
  document.body.style.backgroundColor = localStorage.getItem("theme") === "dark" ? "#444" : "#ffffff";

  const [formState, setFormState] = useState(false);
  const [queues, setQueues] = useState([]);

  useEffect(() => {
    const savedQueues = JSON.parse(localStorage.getItem('queues'));
    if (savedQueues) {
      setQueues(savedQueues);
    }
  }, []);

  const handleAddQueue = (queue) => {
    const newQueues = [...queues, queue];
    setQueues(newQueues);
    localStorage.setItem('queues', JSON.stringify(newQueues));
  }

  return (
    <ThemeHandlerProvider>
      <Navbar 
        setFormState={setFormState}
      />
      <QueueList 
        queues={queues}/>
      {formState && <AddQueueForm 
        setFormState={setFormState}
        handleAddQueue={handleAddQueue}
      />}
    </ThemeHandlerProvider>
  );
}

export default App;
