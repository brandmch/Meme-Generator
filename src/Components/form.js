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

    function change(event) {
        console.log(event.target.value)
    }

    return (
        <div>
            <div className="form">
                <div className="input-fields">
                    <input className="input1" type="text" placeholder="Top Text" onChange={change}></input>
                    <input className="input2" type="text" placeholder="Bottom Text"></input>
                </div>
                <button onClick={clickHandler}>Create Meme</button>
            </div>
            <div className="meme">
                {/* <img src={meme.url} /> */}
                <img src="http://i.imgflip.com/1bij.jpg" className="meme--image" />
                <h2 className="meme--text top">Top text</h2>
                <h2 className="meme--text bottom">Bottom text</h2>
            </div>
        </div>
    )
}

