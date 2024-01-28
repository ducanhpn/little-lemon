import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import {Routes, Route} from "react-router-dom"
import {useEffect, useReducer} from "react"


const updateTimes = (state,action)=>{
    return action.type;
}

const initializeTimes = () => {
    return "17:00";
}
export default function Main(){
    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes);
    const date = new Date('1995-12-17T03:24:00');

    useEffect(()=>{
    })

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}></Route>
            </Routes>
        </>
    );
}