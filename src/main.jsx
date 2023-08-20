import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from "react-router-dom"
import { NotesProvider } from './context/notesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <NotesProvider>
        <App />
      </NotesProvider>
    </React.StrictMode>
  </BrowserRouter>
)
