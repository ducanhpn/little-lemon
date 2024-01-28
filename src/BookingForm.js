import {useState} from "react"
import "./Form.css"

const times = ["17:00","18:00","19:00","20:00","20:30","21:00"]
export default function BookingForm({availableTimes, dispatch}){
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [guests, setGuests] = useState();
    const [occasions, setOccasions] = useState("Birtday");
    const [date , setDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("submit");
    };
    return (
        <div className="grey" id="form-container">
            <h1 className="text-center">Reservation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:*</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">Email:*</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="phone-number">Phone:</label>
                    <input type="tel" id="phone-number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="guests">Guests:</label>
                    <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={(e)=>setGuests(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="occasions">Occasions</label>
                    <select id="occasions" value={occasions} onChange={(e)=>setOccasions(e.target.value)}>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <select id="time" value={availableTimes} onChange={e=>dispatch({type:e.target.value})}>
                        {times.map((el)=><option value={el} key={el}>{el}</option>)}
                    </select>
                    <input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
                </div>
                <button type="submit">reserve a table</button>
            </form>
        </div>
    );
}