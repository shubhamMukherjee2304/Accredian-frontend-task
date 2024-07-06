// src/App.js
import React from 'react';
import { AppProvider } from './AppContext';
import ReferEarn from './ReferEarn';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <AppProvider>
      <ReferEarn />
    </AppProvider>
  );
}

export default App;