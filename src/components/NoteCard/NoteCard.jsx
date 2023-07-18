import archive from "../../assets/archive.svg"
import pinned from "../../assets/pinned.svg"
import unpinned from "../../assets/unpinned.svg"
import remove from "../../assets/trash.svg"

export default function NoteCard() {
    return (
        <div>
            <div>
                <h2>Note 1 title</h2>
                <span><img src={unpinned} /></span>
            </div>
            <div>
                <p>I am description for Note 1..........</p>
            </div>
            <div>
                <span><img src={archive} /></span>
                <span><img src={remove} /></span>
            </div>
        </div>
    )
}