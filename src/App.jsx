import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/plan" element={<div>Plan Page</div>} />
        <Route path="/aboutus" element={<div>About Us Page</div>} />
        <Route path="/installation" element={<div>Installation Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
