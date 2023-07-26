import Home from "./pages/Home/Home"
import Archive from "./pages/Archive/Archive"
import Important from "./pages/Important/Important"
import './App.css'
import { NotesProvider } from "./context/notesContext"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <NotesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/important" element={<Important />} />
      </Routes>
    </NotesProvider>

  )
}

export default App
