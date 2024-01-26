

export default function Card({image, alt, description, name, price}){
    return <div className="card">
        <img src={image} alt={alt} width="200" height="220"></img>
        <div className="flex-container">
            <h4>{name}</h4>
            <h4>{price}</h4>
        </div>
        <p>{description}</p>
        <a>order a delivery</a>
    </div>
}