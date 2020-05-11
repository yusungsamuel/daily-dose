import React, { useState, useEffect } from 'react';
import Joke from "./component/joke"
import Meme from "./component/meme"
import News from "./component/news"
import NewsCard from "./component/newsCard"
import FortuneCookie from "./component/fortuneCookie"
function App() {

  return (
    <div className="app">
      <Joke></Joke>
      <Meme></Meme>
      <News></News>
      <FortuneCookie></FortuneCookie>
    </div>
  );
}

export default App;
