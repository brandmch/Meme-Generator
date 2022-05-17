import React from "react";
import Meme from "./meme";

export default function Form() {

    const [meme, setMeme] = React.useState()

    function clickHandler(e) {
        e.preventDefault();
        setMeme(Meme());
    }

    return (
        <div className="form">
            <div className="input-fields">
                <input className="input1" type="text" placeholder="Top Text"></input>
                <input className="input2" type="text" placeholder="Bottom Text"></input>
            </div>
            <button onClick={clickHandler}>Create Meme</button>
            {meme}
        </div>
    )
}