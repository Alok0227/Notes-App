import React, { useState } from 'react'



export default function Form(props) {


    let handleOnChange = function (event) {
        setText(event.target.value)
    }

    let handleOnClick = () => {
        let text = document.getElementById('my-box');
        if(text.value.length === 0){
            props.alert("Uppercased has no Operator ", 'danger')
            return;
        }
        // console.log("On Click Event Fired.")
        setText(text.toUpperCase());
        props.alert("UpperCased operated", 'success')
    }
    const [text, setText] = useState("");


    let handleOnCopy = (event) => {
        let text = document.getElementById('my-box');
        text.select()
        if(text.value.length === 0){
            props.alert("Nothing to copy", 'danger')
            return;
        }
        navigator.clipboard.writeText(text.value);
        
        props.alert('Text Copied on Clipboard', 'success')
    }

    let handleOnSpace = () => {
        // let text2 = document.getElementById('my-box');
        // text2.value.split(/[]+/)
        // setText(text2.join(''));
        props.alert("Soory can't do anything", 'danger')
    }

    let handletoremove = ()=>{
        let text = document.getElementById('my-box');
        if(text.value.length === 0){
            props.alert("Nothing to copy", 'danger')
            return;
        }
        let cleartext = '';
        setText(cleartext)
        props.alert("Content Removed", 'success')
    }

    



    return (

        <div style={{fontFamily:'courier new'}}>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black',fontFamily:'courier new'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="my-box" placeholder='Enter text' value={text} onChange={handleOnChange} rows="6"></textarea>
            </div>
            <button className="btn btn-primary" style={{ margin: "10px" }} onClick={handleOnClick}>Uppercase</button>
            <button className="btn btn-primary" style={{ margin: "10px" }} onClick={handleOnCopy}>Copy Content</button>
            <button className="btn btn-primary " style={{ margin: "10px" }} onClick={handleOnSpace}>Escape Space</button>
            <button className="btn btn-primary " style={{ margin: "10px" }} onClick={handletoremove}>Remove Content</button>
            <div className="textcounter my-10" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Text Preview</h3>
                <p>Contains {text.split(' ').length} Words and {text.length}  Characters </p>
                <h2>Text Contain</h2>
                <p>{text.length > 0 ? text : "Enter the text above to show."}</p>
            </div>
            {/* <button className="btn btn-primary" onClick={handleMode}>{btnText}</button> */}
        </div>


    )
}
