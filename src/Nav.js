export default function Nav({position}){
    return <nav>
        <ul className={position}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Reservations</a></li>
            <li><a href="">Order Online</a></li>
            <li><a href="">Login</a></li>
        </ul>
    </nav>
}