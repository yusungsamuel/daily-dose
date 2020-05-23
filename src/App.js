import React, { useState, useEffect } from 'react';
import Joke from "./component/joke"
import Meme from "./component/meme"
import News from "./component/news"
import NewsCard from "./component/newsCard"
import FortuneCookie from "./component/fortuneCookie"
import Weather from "./component/weather"
import "./App.scss"

function App() {
  return (
    <div className="app">

      <div className="grid">
        <div className="news"><News></News></div>
        <div className="grid-item meme"><Meme></Meme></div>

        <div className="grid-item"><Joke></Joke></div>
        
        <Weather></Weather>
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
