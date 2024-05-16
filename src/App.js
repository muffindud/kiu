import React from 'react';
import Navbar from './components/Navbar/Navbar';

import { ThemeHandlerProvider } from './components/ThemeHandler/ThemeHandler';

function App() {
  return (
    <ThemeHandlerProvider>
      <Navbar />
    </ThemeHandlerProvider>
  );
}

export default App;
