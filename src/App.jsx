import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
