import { LOGO_URL } from "../utils/constant";
//Header Component
const Header = () => {
    return (
        <div className="header">
            <img className="logo-image" src={LOGO_URL}/>
            <div className="nav-items">
                <ul>
                    <li className="home">Home</li>
                    <li className="about-us">About Us</li>
                    <li className="cart">Cart</li>
                    <li className="help">Help</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;