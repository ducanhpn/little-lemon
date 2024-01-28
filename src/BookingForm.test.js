import { fireEvent,render,screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("rendering booking form heading",()=>{
    render(<BookingForm />);
    const headingElement =  screen.getByText("Reservation");
    expect(headingElement).toBeInTheDocument();
})

test("correct default value by times",()=>{
    render(<BookingForm />);
    const initializeTimes = screen.getByLabelText("Time:");
    expect(initializeTimes).toHaveValue("17:00");
})

test("display correct value when time updated",()=>{
    render(<BookingForm />)
    const select = screen.getByLabelText("Time:");
    fireEvent.click(select, {target: {value:"18:00"}});
    expect(select).toHaveValue("18:00");
})