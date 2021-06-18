// DO NOT DELETE

import * as React from 'react'
import { useState } from "react";
import './App.css'

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  const [dogURL, setDogUrl] = useState("https://images.dog.ceo/breeds/cairn/n02096177_1596.jpg");
  let getRandomDog = () => { console.log() };

  return (
    <main role="main">
      <header className="site-header">
        <h1>Test Flight!</h1>
        <nav class="dog-nav">
          Automatic Dog image Display powerd by dog.
        </nav>
      </header>
      <div className="dog-container">
        <img className="dog-image" src={dogURL} alt="dog"></img>
        <button className="btn-flat-border"
          onClick={() => fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then((data) => {
              if (data.status === "success") {
                setDogUrl(data.message)
              }
            })}
        >Press to Change Dog</button>
      </div>
    </main>
  );
}
