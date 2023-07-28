import "./Home.css"
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewNote from "../../components/NewNote/NewNote";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context/notesContext"

export default function Home() {
  const { notes, pinnedNotes } = useNotes()
  return (
    <div>
      <Header />
      <div className="home__grid-container">
        <Sidebar className="sidebar" />
        <NewNote />
        <div className="home__notes-container">
          <div>
            {pinnedNotes.length > 0 && <h2>Pinned Notes</h2>}
            <div className="home__notecard">
              {
                pinnedNotes.map(note => <NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />)
              }
            </div>
          </div>
          <div>
            {notes.length > 0 && <h2>Other Notes</h2>}
            <div className="home__notecard">
              {
                notes.map(note => <NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
