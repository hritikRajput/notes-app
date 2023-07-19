import Home from "./pages/Home/Home"
import './App.css'
import { NotesProvider } from "./context/notesContext"

function App() {
  return (
    <NotesProvider>
      <div>
        <Home />
      </div>
    </NotesProvider>

  )
}

export default App
