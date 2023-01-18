import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Router from './Router';
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Header />
      <container className='flex flex-nowrap'>
        <Nav />
        <Router />
      </container>
    </>
  );
}

export default App;
