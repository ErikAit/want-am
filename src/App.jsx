import React from 'react'
import { useState } from 'react'
import 'boxicons'
import Header from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header />
      </div>
    </>
  )
}

export default App
