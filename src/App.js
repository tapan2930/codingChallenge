import React from 'react';
import './App.css'

import Navbar from './components/navbar/navbar'
import HeroSection from './components/sectionHero/sectionHero'
import SectionSponsers from './components/sectionSponsers/sectionSponsers'
import SectionInfo from './components/sectionInfo/sectioninfo'
import SectionSignUp from './components/sectionsignup/sectionsignup'


function App() {
  return (
    <div>
       <Navbar />
      <div className="app"> 
      <HeroSection />
      <SectionSponsers />
      <SectionInfo />
      <SectionSignUp />
       </div>
    </div>
     
  );
}

export default App;

