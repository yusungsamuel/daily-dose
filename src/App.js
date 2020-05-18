import React, { useState, useEffect } from 'react';
import Joke from "./component/joke"
import Meme from "./component/meme"
import News from "./component/news"
import NewsCard from "./component/newsCard"
import FortuneCookie from "./component/fortuneCookie"
import "./App.scss"
require("dotenv").config()

function App() {
  console.log(process.env.REACT_APP_NEWS_API_KEY)
  return (
    <div className="app">

      <div className="grid">
        <div className="news"><News></News></div>
        <Joke></Joke>
        <Meme></Meme>
        <div className="grid-item">Button</div>
        <div className="grid-item">Button</div>
        <div className="grid-item">Button</div>
        <div className="grid-item">Button</div>
        <div className="grid-item">Button</div>
        <div className="grid-item">Button</div>
        {/* <FortuneCookie></FortuneCookie> */}
      </div>
    </div>
  );
}

export default App;
