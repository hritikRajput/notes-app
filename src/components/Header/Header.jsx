import logo from "../../assets/logo.png"
import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Image showing logo of company" />
            <h1 className="header__title">PaperTrail</h1>
        </header>
    )
}