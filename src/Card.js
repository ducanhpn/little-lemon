

export default function Card({image, alt, description, name, price}){
    return <div className="card">
        <img src={image} alt={alt} width="200"></img>
        <div>
            <h4>{name}</h4>
            <h4>{price}</h4>
        </div>
        <p>{description}</p>
        <a>order or delivery</a>
    </div>
}