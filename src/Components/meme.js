import React from "react";
import { stringify } from "uuid";
import memes from '../memedata';


export default function Meme() {

    const [memes, setMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:4000/memes")
            .then(res => res.json())
            .then(data => setMemes(data));
    }, [])

    console.log(memes)

    return "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/30/85f2cb5f-44f8-4f2f-a813-63e657e11acc_5065cac7.jpg?itok=gY-K9HdU&v=1635566576"

}  