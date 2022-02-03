import './App.css';
import Navbar from './Components/Navbar.js';
import Form from './Components/Form.js';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
        msg: message,
        type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const modeToggler = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#181818';
      showAlert("Dark mode has been enabled", "success" )
      //dynamically changing title
      document.title = "Text Utilitis Dark Mode"
      // setInterval(() => {
      //   document.title = "Text Utilitis Dark Mode"
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Text Utilitis Mode"
      // }, 2500);
      

    } else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "danger" )
      //dynamically changing title
      document.title = "Text Utilitis Light Mode"
    }
  }

  return (

    <><Router>
      <Navbar title="Case Converter" mode={mode} modeToggler={modeToggler} />
      <Alert className="alert" alert={alert}/>
      <div className="container mt-4">
        
      <Routes>
          <Route exact path="/about" 
              element={<About />}
          />
  
          <Route exact path="/" 
              element={<Form title="Enter Your Text Here" showAlert={showAlert} mode={mode}/>} 
          />
        </Routes>
        
        
      </div>
      </Router>
    </>
  );
}

export default App;