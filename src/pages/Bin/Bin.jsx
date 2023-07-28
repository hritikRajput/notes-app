import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context/notesContext"
import "./Bin.css"

export default function Bin() {
    const { deletedNotes } = useNotes()
    return (
        <div className="bin__grid-container">
            <Header className="header" />
            <Sidebar className="sidebar" />
            <div className="bin__notecard-container">
                {deletedNotes.length > 0 ? <h2>Deleted Notes</h2> : <p className="no-notes">There is nothing to show</p>}
                <div className="bin__notecard">
                    {
                        deletedNotes.map(note => <NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />)
                    }
                </div>
            </div>
        </div>
    );
}
