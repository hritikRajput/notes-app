import Header from "../../components/Header/Header";
import NoteCard from "../../components/NoteCard/NoteCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNotes } from "../../context/notesContext";
import "./Archive.css"

export default function Archive() {
    const { archiveNotes } = useNotes()
    return (
        <div className="archive">
            <Header />
            <div className="archive__grid-container">
                <Sidebar />
                <div className="archive__notecard-container">
                    {archiveNotes.length > 0 ? <h2>Archive Notes</h2> : <p className="no-notes">There is nothing to show</p>}
                    <div className="archive__notecard">
                        {
                            archiveNotes.map(note => (<NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
