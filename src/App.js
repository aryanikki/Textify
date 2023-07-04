/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';   
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import { type } from '@testing-library/user-event/dist/type';


function App() {
  const [mode, setmode] = useState('light');//tells whether dark mode is enabled or not
  //setAlert is a state to set the value of alert
  const[alert, setAlert] = useState(null); //making alert an object and initially alert is null

  //method for setAlert
  //showAlert is a function which will show the alert message
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);

  }

  const togglemode =() =>{
    if(mode === "light"){
    setmode('dark');
    document.body.style.background ='#042743';
    showAlert(" Dark mode has been enabled","success");

  }
  else{
    setmode('light');
    document.body.style.background ='white';
    showAlert(" Light mode has been enabled","success");
  }
}
  return (
   <>
   {/*Navbar component and title and aboutText are props*/}
{/*<Navbar  title="Textify" aboutText="About us"/>*/}
<Navbar title='Textify' mode={mode} togglemode={togglemode}/>
{/*importing alert component*/}
<Alert alert={alert} ></Alert>
{/*Importing component Textform*/}
<div className='container'>
<Textform showAlert={showAlert}heading="Enter the text here"mode={mode}/>
{/*<About/>*/}
</div>

</>
  

  );
}

export default App;

