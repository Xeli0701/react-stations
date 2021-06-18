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
  return (
    <main role="main">
      <header>Test Flight!</header>
      <div>
        <div>
          This is Dog image.
        </div>
      </div>
      <img src={dogURL} alt="dog"></img>
    </main>
  )
}
