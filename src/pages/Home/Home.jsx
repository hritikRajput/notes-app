import Header from "../../components/Header/Header";
import NewNote from "../../components/NewNote/NewNote";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context/notesContext"

export default function Home() {
  const { notes, pinnedNotes } = useNotes()
  return (
    <div>
      <Header />
      <NewNote />
      <div>
        {pinnedNotes.length > 0 && <h2>Pinned Notes</h2>}
        {
          pinnedNotes.map(note => <NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />)
        }
      </div>
      <div>
        {notes.length > 0 && <h2>Other Notes</h2>}
        {
          notes.map(note => <NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />)
        }
      </div>
    </div>
  );
}
