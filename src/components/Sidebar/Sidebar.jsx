import "./Sidebar.css"
import { NavLink } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <NavLink to="/" className={({ isActive }) => `${isActive ? "active-link" : ""} link`} >Home</NavLink>
            <NavLink to="/archive" className={({ isActive }) => `${isActive ? "active-link" : ""} link`}>Archive</NavLink>
            <NavLink to="/important" className={({ isActive }) => `${isActive ? "active-link" : ""} link`}>Important</NavLink>
            <NavLink to="/bin" className={({ isActive }) => `${isActive ? "active-link" : ""} link`}>Bin</NavLink>
        </div>
    )
}


