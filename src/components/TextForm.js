import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handelUpClick = () => {
        let uptext = text.toUpperCase();
        setText(uptext)
        props.showAlter("Converted To UpperCase", "success")
    }
    const handelLoClick = () => {
        let Lotext = text.toLowerCase();
        setText(Lotext)
        props.showAlter("Converted To LowerCase", "success")
    }
    const handelClearCick = () => {
        let Cleartext = "";
        setText(Cleartext)
        props.showAlter("Text Cleared", "success")
    }
    const handelCopyCick = () => {
        let text = document.getElementById("mybox");
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlter("Text Copied", "success")
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlter("Exrta Space Removed", "success")
    }


    const handelOnChange = (event) => {
        setText(event.target.value)
    }


    return (
        <>
            <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
                <div className='my-3'>
                    <h1 className='mb-4'>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handelOnChange} 
                    style={{backgroundColor: props.mode === 'dark'? '#13466e':'white', color: props.mode === 'dark'? 'white':'black' }} id="mybox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0}  onClick={handelUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0}  onClick={handelLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0}  onClick={handelClearCick}>Clear text</button>
                <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0}  onClick={handelCopyCick}>Copy text</button>
                <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0}  onClick={handleExtraSpaces}>Remove Exrta text</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} wordes and  {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
