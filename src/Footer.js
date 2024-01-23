import restaurant from "./Assets/restaurant.jpg"
import Nav from "./Nav"

export default function Footer(){
    return <footer>
        <img src={restaurant} alt="restaurant view" width="200"></img>
        <div>
            <h3>Navigation Links</h3>
            <Nav />
        </div>
        <div>
            <h3>Contact</h3>
            <ul>
                <li>Adress</li>
                <li>Phone NUmber</li>
                <li>Email</li>
            </ul>
        </div>
        <div>
            <h3>Social Media Link</h3>
            <ul>
                <li>Adress</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>
    </footer>
}