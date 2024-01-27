import PersonImage from "./Assets/Mario and Adrian A.jpg"

export default function Chicago(){
    const about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    return (
        <section id="about-section" className="grid-12">
            <div className="span-8">
                <h1 className="span-12">Little Lemon</h1>
                <h2>Chicago</h2>
                <p>{about}</p>
            </div>
            <img src={PersonImage} alt="Mario and Ajan" width="200" className="span-4 center"></img>
        </section>
    );
}