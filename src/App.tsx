import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import navbarItems from './components/navbarList';
import ContactForm from './components/contact';
import AboutSection from './components/about';


function App() {

  return (
    <div className="App">
      <Navbar items={navbarItems}/>
      <AboutSection />
      <ContactForm />
    </div>
  );
}

export default App;
