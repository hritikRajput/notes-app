import React from "react"
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewNote from "../../components/NewNote/NewNote";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context/notesContext"
import "./Important.css"

export default function Important() {
    const [isImportant, setIsImportant] = React.useState(true)
    const { importantNotes } = useNotes()
    return (
        <div className="important__grid-container">
            <Header className="header" />
            <Sidebar className="sidebar" />
            <NewNote isImportant={isImportant} />
            <div className="important__notes-container" >
                {importantNotes.length > 0 && <h2>Important Notes</h2>}
                <div className="important__notecard">
                    {
                        importantNotes.map(note => <NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />)
                    }
                </div>
            </div>
        </div>
    );
}
