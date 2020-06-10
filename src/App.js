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
      <Weather></Weather>
     
    </div>
  );
}

export default App;
