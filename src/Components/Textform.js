import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick=()=>{
   // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  }
    const handleOnChange=(event)=>{
    //  console.log("On change");
      //event.target.value helps the user to type their content in the box
      setText(event.target.value);
  }
  const handlelowClick=()=>{
     let newText =text.toLowerCase();
     setText(newText);
  }
  const handleclrClick=()=>{
    let newText ="";
    setText(newText);
 }
 const handleExtraSpaces =() =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
 }

     // Declare a new state variable, which we'll call "setText"
  const [text, setText] = useState("");
  //above syntax means that variable text has default value"Enter text here"
  //and everytime we need to update the text we will do through setText function
  //which means text variable is set to ----> first element of array useState(),that is "Enter text here"
  //and setText variable is set to -----> next element of the array useState(whatever string it is)
  
  //if we want to update/change the text
  //text="hello world";  -----> this is the wrong way

  //use setText to change text
  //setText="hello world";  ---->correct way
  return (
    <>
    <div className='container'style={{color: props.mode === 'dark'?'white':'black'}}>
   <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',
color: props.mode === 'dark'?'white':'black'}}id="MyText" rows="12"></textarea>
  
</div>
{/*mx-2 is used to keep distance between to classes*/}
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handlelowClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleclrClick}>Clear Text</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove extra spaces</button>


</div>
<div className='container'style={{color: props.mode === 'dark'?'white':'black'}}>
  <h3> Your text summary</h3>
  <p>{text.split(" ").filter(i => i).length} words and {text.length} characters {text.split('.').filter(i => i).length} sentences</p>
  <p>{0.08 * text.split(" ").length} minutes to read</p>
  <h3>Preview of your text</h3>
  <p>{text}</p>
</div>
</>

  )
}
