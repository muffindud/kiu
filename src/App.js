import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { ThemeHandlerProvider } from './components/ThemeHandler/ThemeHandler';

function App() {
  document.body.style.backgroundColor = localStorage.getItem("theme") === "dark" ? "#444" : "#ffffff";

  return (
    <ThemeHandlerProvider>
      <Navbar />
    </ThemeHandlerProvider>
  );
}

export default App;
