import React, { useState } from 'react'


export default function Text(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  
  const handleClearClick = () => {
    console.log("" -text);
    let newText = ("");
    setText(newText)
  }


  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value)

  }

  const [text, setText] = useState('');

  return (
    <div>
      <>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
          </div>
          <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
          <button type="button" className="btn btn-danger mx-2" onClick={handleLowClick}>Convert to lowercase</button>
          <button type="button" className="btn btn-warning mx-2" onClick={handleClearClick}>Clear text</button>

        </div>
        <div className="container my-2">
          <h2>Your text summary</h2>
          <p>{text.split(" ").length}words and {text.length}charcaters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>

        </div>



      </>

    </div>
  )
}
  