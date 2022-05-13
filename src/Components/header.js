import React from 'react'
import { datBoi } from '../Images/images'


export default function Header() {
    return (
        <div className='header'>
            <img src={datBoi} />
            <h1>Meme Generator</h1>
            <h2>Just meme it.</h2>
        </div>
    )
}