// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeCards/>
    </>
  )
}

export default App
