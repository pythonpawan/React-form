import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import React from 'react'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <About/>
     <Text heading="Enter the text analyze below"/> 
     
      </div>
     
      
    </>
  );
}


export default App;
