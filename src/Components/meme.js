import React from "react";
import memes from '../memedata';


function getMeme() {
    let x = Math.floor(Math.random() * memes.data.memes.length);
    console.log(x);

    let meme = memes.data.memes[x];

    return meme.url;
}

export default function Meme() {

    return (
        <div className="meme">
            <img src={getMeme()} />
        </div>
    )
} 