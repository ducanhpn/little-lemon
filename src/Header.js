import Nav from "./Nav"
import Logo from "./Assets/Logo.svg"
export default function Header({children}){
    return <header>
        <img src={Logo} alt="Little Lemon Logo"></img>
        <Nav />
    </header>
}