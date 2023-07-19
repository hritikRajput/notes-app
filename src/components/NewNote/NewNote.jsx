import React from "react"
import "./NewNote.css"
import plus from "../../assets/plus-solid.svg"
import { useNotes } from "../../context/notesContext"

export default function NewNote() {
    const { title, setTitle, description, setDescription, notes, setNotes } = useNotes()
    const handleTitleChange = (e) => {
        console.log(e.target)
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        console.log(e.target)
        setDescription(e.target.value)
    }

    const handleClick = () => {
        console.log("Plus sign clicked")
    }


    return (
        <div className="newnote">
            <input className="newnote__title" onChange={handleTitleChange} type="text" name="title" value={title} placeholder="Add the title" />
            <textarea className="newnote__description" onChange={handleDescriptionChange} name="description" value={description} cols="80" rows="5" placeholder="Add your note here ..." />
            <img src={plus} className="newnote__plus" onClick={handleClick} />
        </div>
    )
}