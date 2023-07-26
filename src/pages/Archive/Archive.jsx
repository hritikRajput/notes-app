import Header from "../../components/Header/Header";
import NoteCard from "../../components/NoteCard/NoteCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNotes } from "../../context/notesContext";

export default function Archive() {
    const { archiveNotes } = useNotes()
    return (
        <div>
            <Header />
            <Sidebar />
            {archiveNotes.length > 0 && <h2>Archive Notes</h2>}
            {
                archiveNotes.map(note => (<NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />))
            }
        </div>
    );
}
