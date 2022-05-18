import React from "react";
import memes from '../memedata';

export default function Meme() {

    let x = Math.floor(Math.random() * memes.data.memes.length);
    console.log(x);

    let meme = memes.data.memes[x];

    return meme.url
} 