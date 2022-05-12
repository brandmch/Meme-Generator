import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/header';
import Form from './Components/form';
import Meme from './Components/meme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Form />
    <Meme />
  </React.StrictMode>
);
