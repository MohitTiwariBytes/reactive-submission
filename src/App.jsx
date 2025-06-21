import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './Layout'
import './App.css'
import About from './Pages/About/About'
import MegaDogs from './Pages/SUMMIT/Summit'
import Dogs from './Pages/Dogs/Dogs'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dogs/" element={<Dogs />} />
          <Route path="/dogs/multi-dogs" element={<MegaDogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
