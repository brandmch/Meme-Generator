import React from "react";

export default function Form() {

    function clickHandler(e) {
        e.preventDefault();
        console.log("yolo swag haha 420");
    }

    return (
        <div className="form">
            <div className="input-fields">
                <input className="input1" type="text" placeholder="Top Text"></input>
                <input className="input2" type="text" placeholder="Bottom Text"></input>
            </div>
            <button onClick={clickHandler}>Create Meme</button>
        </div>
    )
}