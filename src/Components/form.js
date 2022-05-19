import React from "react";
import { useState, useEffect } from "react";
import Meme from "./meme";

export default function Form() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.kym-cdn.com%2Fphotos%2Fimages%2Ffacebook%2F000%2F801%2F694%2F8e9.jpg&f=1&nofb=1"
    })
    const [allMemes, setAllMemes] = useState([]);

    React.useEffect(() => {
        fetch("http://localhost:4000/")
            .then(res => res.json())
            .then(data => setAllMemes(data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <div>
            <div className="form">
                <div className="input-fields">

                    <input
                        className="input1"
                        type="text"
                        placeholder="Top Text"
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText} />

                    <input
                        className="input2"
                        type="text"
                        placeholder="Bottom Text"
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText} />

                </div>
                <button onClick={getMemeImage}>Random Meme Template</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

