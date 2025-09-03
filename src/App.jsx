import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuAppBar from './Components/MenuAppBar'
import Home from './Pages/Home'
import Area1 from './Pages/Area1'
import Area2 from './Pages/Area2'

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <MenuAppBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/area1" element={<Area1 />} />
            <Route path="/area2" element={<Area2 />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
