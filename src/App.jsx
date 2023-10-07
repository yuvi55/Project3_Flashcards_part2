import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import { data } from './data'

function App() {
  return (
    <div>
      <h1>The Ultimate Plant Parent</h1>
      <h2>How good of a plant parent are you?</h2>
      <h3>Number of Cards: {data.length}</h3>
      
      <div>
          <Card
          />  
      </div>    
      
    </div>
  )
}

export default App
