// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAll from './components/ViewAll';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeCards/>
      <JobListings/>
      <ViewAll/>
    </>
  )
}

export default App
