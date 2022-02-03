import React, { useState } from 'react';

export default function Form(props) {

    const fnUpperCase = () => {
        let result = text.toUpperCase();
        setText(result);
        props.showAlert("Converted to UpperCase Successfully", "warning")
    }
    const fnLowerCase = () => {
        let result = text.toLowerCase();
        setText(result);
        props.showAlert("Converted to LowerCase Successfully", "warning")
    }
    const fnSentenceCase = () => {
        let result = text.charAt(0).toUpperCase() + text.slice(1);
        setText(result);
    }
    const fnCapitalCase = () => {
        let result = text.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
        setText(result);
    }
    const fnClear = () => {
        let result = "";
        setText(result);
    }
    const fnReExSp = () => {
        let result = text.trim();
        setText(result);
    }
    const fnCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "warning")
    }

    const changeHandler = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('This is a sample text for testing this first React app created by Rohit Panchal.');

    let LowerCase = {border:props.mode==="dark"?"1px solid #6a6a6a":" ", color:props.mode==="dark"?"#b0b0b0":""} 
    

    return (
        <>
            <div className="mb-3" style={{color: props.mode==='light'?'black':'#cecece'}}>
                <h4>{props.title}</h4>
                <textarea style={{color: props.mode==='light'?'black':'#cecece', backgroundColor: props.mode==='light'?'white':'#212529', border: props.mode==='dark'?'none':''}} className="form-control" onChange={changeHandler} value={text} rows="8" placeholder='Enter text here'></textarea>
            </div>
            <button style={LowerCase} className="btn btn-outline-primary mx-2 mb-3" onClick={fnUpperCase}>UPPER CASE</button>
            <button style={LowerCase} className="btn btn-outline-primary mb-3 " onClick={fnLowerCase}>lower case</button>
            <button style={LowerCase} className="btn btn-outline-primary mb-3 mx-2" onClick={fnSentenceCase}>Sentence case</button>
            <button style={LowerCase} className="btn btn-outline-primary mb-3" onClick={fnCapitalCase}>Capitalise Case</button>
            <button style={LowerCase} className="btn btn-outline-primary mb-3 mx-2" onClick={fnCopy}>Copy to Clipboard</button>
            <button style={LowerCase} className="btn btn-outline-primary mb-3" onClick={fnClear}>Clear</button>
            <button style={LowerCase} className="btn btn-outline-primary mb-3 mx-2" onClick={fnReExSp}>Remove Extra Spaces</button>
            <div className="textInfo"  style={{color: props.mode==='light'?'black':'#cecece'}}>
                <p>There are <span>{text.length}</span> characters and <span>{text.split(" ").length}</span> Words in this text.</p>
                <p>It will take <span>{0.004 * text.split(" ").length}</span> minutes to read this text according to an average reading rate of <b>250 words per minute</b> (wpm).</p>
            <h3>Preview</h3>
            <p>{text}</p>
            </div>
        </>
    )
}