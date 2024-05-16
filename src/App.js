import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import QueueList from './components/QueueList/QueueList';
import { ThemeHandlerProvider } from './components/ThemeHandler/ThemeHandler';
import AddQueueForm from './components/AddQueueForm/AddQueueForm';

function App() {
  document.body.style.backgroundColor = localStorage.getItem("theme") === "dark" ? "#444" : "#ffffff";

  const [formState, setFormState] = useState(false);

    return (
    <ThemeHandlerProvider>
      <Navbar 
        setFormState={setFormState}
      />
      <QueueList />
      {formState && <AddQueueForm 
        setFormState={setFormState}
      />}
    </ThemeHandlerProvider>
  );
}

export default App;
