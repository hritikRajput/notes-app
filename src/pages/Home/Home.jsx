import Header from "../../components/Header/Header";
import NewNote from "../../components/NewNote/NewNote";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context/notesContext"

export default function Home() {
  const { notes } = useNotes()
  return (
    <div>
      <Header />
      <NewNote />
      {
        notes.map(note => <NoteCard title={note.title} description={note.description} id={note.id} />)
      }
    </div>
  );
}
