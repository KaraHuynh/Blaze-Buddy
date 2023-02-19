import './App.css';
import Navbar from './sections/Navbar/Navbar';
import FireTracker from './sections/FireTracker/FireTracker';
import FireProtocols from './sections/FireProtocols/FireProtocols';
import FireFacts from './sections/FireFacts/FireFacts';
import Resources from './sections/Resources/Resources';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
import FireCard from './components/FireCard/FireCard';

function App() {
  var nasaData = require('../src/Dataset.json');
  console.log(nasaData["data"][0]["title"]);
  return (
    <BrowserRouter>
      <Navbar />
      <FireTracker />
      <FireCard title="fire breaks out in ontario!" date="2023-2-21" time="10:00AM" location ="Toronto,Ontario" description='oh my gosh so a fire breaks out!!'></FireCard>
      <FireProtocols />
      <FireFacts />
      <Resources />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
