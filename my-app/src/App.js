// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode =()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
