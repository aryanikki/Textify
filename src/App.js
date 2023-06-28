/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';   
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';




function App() {
  const [mode, setmode] = useState('dark');//tells whether dark mode is enabled or not
  return (
   <>
   {/*Navbar component and title and aboutText are props*/}
{/*<Navbar  title="Textify" aboutText="About us"/>*/}
<Navbar title='Textify' mode={mode}/>
{/*Importing component Textform*/}
<div className='container'>
<Textform heading="Enter the text here"/>
{/*<About/>*/}
</div>

</>
  

  );
}

export default App;

