import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Router from './Router';
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <>
      <Header />
      <MovieDetail />
      <Router />
    </>
  );
}

export default App;
