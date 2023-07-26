import React from "react"
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewNote from "../../components/NewNote/NewNote";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../context/notesContext"

export default function Important() {
    const [isImportant, setIsImportant] = React.useState(true)
    const { importantNotes } = useNotes()
    return (
        <div>
            <Header />
            <Sidebar />
            <NewNote isImportant={isImportant} />
            <div>
                <h2>Important Notes</h2>
                {
                    importantNotes.map(note => <NoteCard key={note.id} title={note.title} description={note.description} id={note.id} />)
                }
            </div>
        </div>
    );
}
