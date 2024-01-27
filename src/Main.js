import ImageHeroSection from "./Assets/restauranfood.jpg"
import GreekSalat from "./Assets/greek salad.jpg"
import Bruchetta from "./Assets/bruchetta.svg"
import LemonDessert from "./Assets/lemon dessert.jpg"
import PersonImage from "./Assets/Mario and Adrian A.jpg"
import Card from "./Card"
import Rating from "./Rating"

export default function Main(){
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    return (
        <>
        <section id="hero-section" className="grid-12">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>reserve a table</button>
            </div>
            <img src={ImageHeroSection} alt="restaurant food" width="300" height="400" className="bottom"></img>
        </section>
        <section id="highlight-section" className="grid-12">
            <div>
                <h2 id="h2-special">Special</h2>
                <button id="online-menu-button">online menu</button>
            </div>
            <section id="card-section">
                <Card image={GreekSalat} alt="greek salat" name="Greek Salat" price="12.99" description={description} />
                <Card image={Bruchetta} alt="bruchetta" name="Bruchetta" price="13.99" description={description} />
                <Card image={LemonDessert} alt="Lemon Dessert" name="Lemon Dessert" price="11.99" description={description} />
            </section>
        </section>
        <section id="testimonial-section" className="grid-12 grey">
            <h2>Testimonials</h2>
            <Rating />
            <Rating />
            <Rating />
            <Rating />
        </section>
        <section id="about-section" className="grid-12">
            <div className="span-8">
                <h1 className="span-12">Little Lemon</h1>
                <h2>Chicago</h2>
                <p>{about}</p>
            </div>
            <img src={PersonImage} alt="Mario and Ajan" width="200" className="span-4 center"></img>
        </section>
        </>
    );
}