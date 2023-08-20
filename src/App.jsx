import Home from "./pages/Home/Home"
import Archive from "./pages/Archive/Archive"
import Important from "./pages/Important/Important"
import Bin from "./pages/Bin/Bin"
import './App.css'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/important" element={<Important />} />
      <Route path="/bin" element={<Bin />} />
    </Routes>

  )
}

export default App
