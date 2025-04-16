// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
let name = "Hari"

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if (mode =='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('dark mode has enabled', 'success')
      document.title="Textutils - Dark Mode";
      // setInterval(() => {
      //   document.title="Textutils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install it now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has enabled', 'success')
      document.title="Textutils - Light Mode";
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>

      {/* <BrowserRouter> */}
        <Navbar title="titlee" link="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          
                {/* <Routes>
                <Route exact path="/about" element={<About />} />
                
                < Route exact path="/"
                  element= {<TextForm showAlert={showAlert} headline="Enter the text to analyse: " mode={mode}/>} /> 
                </Routes> */}
          <TextForm showAlert={showAlert} headline="Textbox" mode={mode} />
          {/* <About /> */}
        </div>
      {/* </BrowserRouter> */}
    
    </>
    

  );
}

export default App;
