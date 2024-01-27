import Specials from "./Specials";
import Chicago from "./Chicago";
import CallToAction from "./CallToAction"
import CustomersSay from "./CustomersSay";

export default function Homepage(){
    return (
    <>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
    </>
    );
}