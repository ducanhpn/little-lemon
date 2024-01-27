import GreekSalat from "./Assets/greek salad.jpg"
import Bruchetta from "./Assets/bruchetta.svg"
import LemonDessert from "./Assets/lemon dessert.jpg"
import Card from "./Card"

export default function Specials(){
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    return <section id="highlight-section" className="grid-12">
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
}