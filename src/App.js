import React, { useState, useEffect } from 'react';
import './App.css';
import joke from "./utilities/API"
import axios from "axios"
function App() {
  const [theJoke, setTheJoke] = useState(null);
  
  useEffect(() => {
    let cancel
    joke()
      .then(response =>{
        setTheJoke(response.data.content)
        new axios.CancelToken(c => cancel = c)
        return () => cancel()
      })
  },[])

  return (
    <div>
      {theJoke}
    </div>
  );
}

export default App;
