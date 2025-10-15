import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Advanced React Tiny Starter - Home</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}

function About() {
  return (
    <>
      <h1>About</h1>
      <p>This is an advanced React starter with routing.</p>
      <Link to="/">Home</Link>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App