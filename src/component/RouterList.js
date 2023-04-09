import { Route, Routes } from "react-router-dom"
import About from "./About";
import App from "../App";
import { ContactUs } from "./ContactUs";
import { PrivacyPolicy } from "./PrivacyPolicy";

export const RouterLink  =() =>{
    return(
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/home" element={<App />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        </Routes>
    );
}