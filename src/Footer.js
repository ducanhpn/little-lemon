import restaurant from "./Assets/restaurant.jpg"
import Nav from "./Nav"

export default function Footer(){
    return <footer className="grid-12">
        <img src={restaurant} alt="restaurant view" width="200" className="span-3"></img>
        <div className="span-2 two-rows">
            <h3>Navigation Links</h3>
            <Nav position="footer" />
        </div>
        <div className="span-2 two-rows">
            <h3>Contact</h3>
            <ul>
                <li>Adress</li>
                <li>Phone NUmber</li>
                <li>Email</li>
            </ul>
        </div>
        <div className="span-2 two-rows">
            <h3>Social Media Link</h3>
            <ul>
                <li>Adress</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>
    </footer>
}