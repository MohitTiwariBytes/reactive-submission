import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './Layout'
import './App.css'
import About from './Pages/About/About'
import MegaDogs from './Pages/SUMMIT/Summit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/multi-dogs" element={<MegaDogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
