import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
export default function Nav({position}){
    return <nav>
        <ul className={position}>
            <li><Link to="/">Home</Link></li>
            <li><HashLink smooth to="/#about-section">About</HashLink></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><HashLink to="/#highlight-section">Order Online</HashLink></li>
            <li><HashLink to="/#testimonial-section">Users talk about us</HashLink></li>
        </ul>
    </nav>
}