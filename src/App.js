import React, { useState, useEffect } from 'react';
import Joke from "./component/joke"
import Meme from "./component/meme"
import News from "./component/news"
import NewsCard from "./component/newsCard"


function App() {
  

  return (
    <div className="app">
      <Joke></Joke>
      <Meme></Meme>
      <News></News>
    </div>
  );
}

export default App;
