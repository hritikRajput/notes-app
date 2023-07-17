import logo from "../../assets/logo.png"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Image showing logo of company" />
            <h1>PaperTrail</h1>
        </header>
    )
}