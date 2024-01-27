import ImageHeroSection from "./Assets/restauranfood.jpg"

export default function CallToAction(){
    return <section id="hero-section" className="grid-12">
    <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button>reserve a table</button>
    </div>
    <img src={ImageHeroSection} alt="restaurant food" width="300" height="400" className="bottom"></img>
</section>;
}