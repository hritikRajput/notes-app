import React from "react"
import "./NewNote.css"
import plus from "../../assets/plus-solid.svg"
import { useNotes } from "../../context/notesContext"
import { v4 as uuid } from "uuid";

export default function NewNote(props) {
    const { title, setTitle, description, setDescription, notes, setNotes, importantNotes, setImportantNotes } = useNotes()
    const { isImportant } = props
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setErrorMessage("");
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        setErrorMessage("");
    }

    const handleClick = () => {
        if (title.trim() === "" || description.trim() === "") {
            setErrorMessage("*Please fill both title and description");
            return;
        }
        if (isImportant) {
            setImportantNotes([...importantNotes, { id: uuid(), title, description }])
        }
        else {
            setNotes([...notes, { id: uuid(), title, description }])
        }

        setTitle("")
        setDescription("")
        setErrorMessage("");
    }


    return (
        <div className="newnote">
            <input className="newnote__title" onChange={handleTitleChange} type="text" name="title" value={title} placeholder="Add the title" />
            <textarea className="newnote__description" onChange={handleDescriptionChange} name="description" value={description} cols="80" rows="5" placeholder="Add your note here ..." />
            <img src={plus} className="newnote__plus" onClick={handleClick} />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    )
}