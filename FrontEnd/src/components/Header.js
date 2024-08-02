import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
//Header Component
const Header = () => {
    return (
        <div className="header">
            <img className="logo-image" src={LOGO_URL}/>
            <div className="nav-items">
                <ul>
                    <li className="home">
                       <Link to="/home" >Home</Link>
                    </li>
                    <li className="about-us">
                        <Link to="/about-us" >AboutUs</Link>
                    </li>
                    <li className="help">
                        <Link to="/support" >Help</Link>
                    </li>
                    <li className="cart">Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;