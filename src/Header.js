import Nav from "./Nav"
import Logo from "./Assets/Logo.svg"
export default function Header({children}){
    return <header className="grid-12">
        <img src={Logo} alt="Little Lemon Logo"></img>
        <Nav />
    </header>
}