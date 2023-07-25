import React from "react"
import archive from "../../assets/archive.svg"
import pinned from "../../assets/pinned.svg"
import unpinned from "../../assets/unpinned.svg"
import remove from "../../assets/trash.svg"
import "./NoteCard.css"
import { useNotes } from "../../context/notesContext"

export default function NoteCard(props) {
    const { title, description, id } = props
    const { notes, setNotes, pinnedNotes, setPinnedNotes } = useNotes()

    function checkIsPinned(pinnedNotes, id) {
        return pinnedNotes.some(note => note.id === id)
    }
    const isPinned = checkIsPinned(pinnedNotes, id)

    function handleDelete(id) {
        const filteredArray = notes.filter((note) => {
            return note.id !== id;
        })
        setNotes(filteredArray)
    }

    function handleUnPinned(id) {
        const filteredArray = notes.filter((note) => {
            return note.id !== id;
        })
        setNotes(filteredArray)
        setPinnedNotes([...pinnedNotes, { title, description, id }])
        setIsPinned(true)
        console.log(isPinned)
    }
    function handlePinned(id) {
        const filteredArray = pinnedNotes.filter((note) => {
            return note.id !== id;
        })
        setPinnedNotes(filteredArray)
        setNotes([...notes, { title, description, id }])
        setIsPinned(false)
        console.log(isPinned)
    }


    return (
        <div className="notecard">
            <div className="notecard__title-row">
                <h2>{title}</h2>
                <span className="notecard__img"><img src={isPinned ? pinned : unpinned} onClick={() => isPinned ? handlePinned(id) : handleUnPinned(id)} /></span>
            </div>
            <div className="notecard__description-row">
                <p>{description}</p>
            </div>
            <div className="notecard__options-row">
                <span className="notecard__img"><img src={archive} /></span>
                <span className="notecard__img"><img src={remove} onClick={() => handleDelete(id)} /></span>
            </div>
        </div>
    )
}