import Home from "./pages/Home/Home"
import Archive from "./pages/Archive/Archive"
import './App.css'
import { NotesProvider } from "./context/notesContext"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <NotesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </NotesProvider>

  )
}

export default App
