import React, { useState, useEffect } from 'react';
import Joke from "./component/joke"
import Meme from "./component/meme"


function App() {
  

  return (
    <div className="app">
      <Joke></Joke>
      <Meme></Meme>
    </div>
  );
}

export default App;
