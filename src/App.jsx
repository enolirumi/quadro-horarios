import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)

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
