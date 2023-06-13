import { NavLink } from "react-router-dom";

import headerImage from "../../assets/header.png";
import profilePic from "../../assets/austin-profile-pic.png"

import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="header__container">
        <img className="header__image" src={headerImage} />
      </div>
      <nav>
          <ul className="header__ul">
            <li className="header__li"><NavLink className="header__navlink">SPEAK</NavLink></li>
            <li className="header__li"><NavLink className="header__navlink">STUDY</NavLink></li>
            <li className="header__li"><NavLink><img className="header__profile-img" src={profilePic}/></NavLink></li>
          </ul>
        </nav>
    </div>
  );
};

export default Header;
