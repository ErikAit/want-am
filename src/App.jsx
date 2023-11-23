import React from 'react'
import { useState } from 'react'
import 'boxicons'
import Header from './Header.jsx'
import Section from './Section.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header />
        <Section />
      </div>
    </>
  )
}

export default App
