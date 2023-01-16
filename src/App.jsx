import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Router from './Router';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
