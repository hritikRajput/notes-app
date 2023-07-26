import "./Sidebar.css"
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/archive">Archive</Link>
                <Link to="/important">Important</Link>
                <Link to="/bin">Bin</Link>
            </ul>
        </div>
    )
}