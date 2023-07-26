import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context/notesContext"

export default function Bin() {
    const { deletedNotes } = useNotes()
    return (
        <div>
            <Header />
            <Sidebar />
            <div>
                {deletedNotes.length > 0 && <h2>Deleted Notes</h2>}
                {
                    deletedNotes.map(note => <NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />)
                }
            </div>
        </div>
    );
}
