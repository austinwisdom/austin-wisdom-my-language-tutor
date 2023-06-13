import { NavLink } from "react-router-dom";

import headerImage from "../../assets/header.png"

import "./Header.scss"

const Header = () => {
    return (
        <div className="header__container">
            <img className="header__image" src={headerImage}/>
            <nav>
                <ul className="header__ul">
                    <NavLink className="header__navlink">MyTutor</NavLink>
                    <NavLink className="header__navlink">STUDY</NavLink>
                    {/* user profile pic goes here with dropdown */}
                    <img></img>
                </ul>
            </nav>
        </div>
    );
};

export default Header;