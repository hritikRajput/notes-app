import React from "react"
import "./NewNote.css"
import plus from "../../assets/plus-solid.svg"
import { useNotes } from "../../context/notesContext"
import { v4 as uuid } from "uuid";

export default function NewNote(props) {
    const { title, setTitle, description, setDescription, notes, setNotes, importantNotes, setImportantNotes } = useNotes()
    const { isImportant } = props

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleClick = () => {
        if (isImportant) {
            setImportantNotes([...importantNotes, { id: uuid(), title, description }])
        }
        else {
            setNotes([...notes, { id: uuid(), title, description }])
        }

        setTitle("")
        setDescription("")
    }


    return (
        <div className="newnote">
            <input className="newnote__title" onChange={handleTitleChange} type="text" name="title" value={title} placeholder="Add the title" />
            <textarea className="newnote__description" onChange={handleDescriptionChange} name="description" value={description} cols="80" rows="5" placeholder="Add your note here ..." />
            <img src={plus} className="newnote__plus" onClick={handleClick} />
        </div>
    )
}