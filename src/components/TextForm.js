import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState("Enter text here.");
    // text="new text";
    // setText("changed text");
    const handleUpClick =()=> {
        // console.log("Uppercase clicked"+text);
        const newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted into Uppercase", "success")
    }
    const handleLoClick =()=> {
        // console.log("Uppercase clicked"+text);
        const newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted into Lowercase", "success")
    
    }
    const handleClearClick =()=> {
        // console.log("Uppercase clicked"+text);
        const newText = "";
        setText(newText);
        props.showAlert("Cleared text", "success")
    
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
        
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
    
      }
    const removeExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join (" "))
        props.showAlert("Removed extra spaces", "success")
    
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.headline}</h1>
        <div className="form-group">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{
  backgroundColor: props.mode === 'dark' ? 'gray' : 'gray',
  color: props.mode === 'dark' ? 'black' : 'white'
}} id="mybox" rows="10"></textarea>
        </div>
        
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            
    </div>

    <div className="container my-3">
        <h1>Your Text summary</h1>
        <p>{text.split (" ") .length} Words and {text.length} Characters</p>
        <p>{0.008*text.split (" ") .length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview here'}</p>
    </div>
    </>
  )
}
