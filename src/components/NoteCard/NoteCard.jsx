import archive from "../../assets/archive.svg"
import pinned from "../../assets/pinned.svg"
import unpinned from "../../assets/unpinned.svg"
import remove from "../../assets/trash.svg"
import "./NoteCard.css"

export default function NoteCard() {
    return (
        <div className="notecard">
            <div className="notecard__title-row">
                <h2>Note 1 title</h2>
                <span className="notecard__img"><img src={unpinned} /></span>
            </div>
            <div className="notecard__description-row">
                <p>I am description for Note 1..........</p>
            </div>
            <div className="notecard__options-row">
                <span className="notecard__img"><img src={archive} /></span>
                <span className="notecard__img"><img src={remove} /></span>
            </div>
        </div>
    )
}