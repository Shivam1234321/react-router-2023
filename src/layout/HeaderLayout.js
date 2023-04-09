import '../index.css';
import { Link } from "react-router-dom";

export const HeaderLayout = () => {
    return (
        <>
            <ul className="header">
                <li><Link to="/home" >Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contactus">contactus</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
        </>
    );
}