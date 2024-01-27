import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import {Routes, Route} from "react-router-dom"

export default function Main(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/booking" element={<BookingPage/>}></Route>
            </Routes>
        </>
    );
}