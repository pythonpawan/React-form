import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import React , {useState}from 'react';

function App() {
  const [mode, setMode] = useState('dark');

 const  toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
      <Navbar  title="Narration" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <About/>
     <Text heading="Enter the text analyze below"/> 
     
      </div>
     
      
    </>
  );
}


export default App;
