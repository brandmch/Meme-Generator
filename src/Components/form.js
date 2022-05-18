import React from "react";
import Meme from "./meme";

export default function Form() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: Meme()
    })

    function clickHandler(e) {
        e.preventDefault();
        setMeme(ogMeme => {
            return {
                ...ogMeme,
                url: Meme()
            }
        });
    }

    return (
        <div className="form">
            <div className="input-fields">
                <input className="input1" type="text" placeholder="Top Text"></input>
                <input className="input2" type="text" placeholder="Bottom Text"></input>
            </div>
            <button onClick={clickHandler}>Create Meme</button>

            <div className="meme">
                <img src={meme.url} />
            </div>
        </div>
    )
}

