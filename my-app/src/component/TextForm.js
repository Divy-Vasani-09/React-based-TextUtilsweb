import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        console.log("UpperCase was Clicked");
        let UpperCase = text.toUpperCase();
        setText(UpperCase)
    }
    const handleLowClick = () => {
        console.log("LowerCase was Clicked");
        let LowerCase = text.toLowerCase();
        setText(LowerCase)
    }
    const handleExtSpaces = () => {
        console.log("Remove Extra Spaces");
        let reText = text.split(/[ ]+/);
        setText(reText.join(" "))
    }
    const handleCopy = () => {
        console.log("text Copy");
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
    }
    const handleResetClick = () => {
        console.log("Reset was Clicked");
        setText("")
    }
    const [text, setText] = useState('');
    return (
        <div className={`container bg-${props.mode} text-${props.mode} bg-opacity-10`}>
            <div className={`container`}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className={`form-control`} style={{border : '1px solid black', backgroundColor : props.mode==='light'?'black':'white'}} value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleExtSpaces}>Remove Extra spaces</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleResetClick}>Reset</button>
            </div>
            <div className='container my-2  '>
                <h2>Your Summary</h2>
                <p>{text.split(" ").length - 1} Words and {text.length} Characters</p>
                <p>{0.008 * (text.split(" ").length - 1)} Minutes for reading</p>
                <h3 className='my-2'>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
