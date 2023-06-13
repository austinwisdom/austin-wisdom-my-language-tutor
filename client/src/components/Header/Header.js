import { NavLink } from "react-router-dom";

import headerImage from "../../assets/half-header.png";
import profilePic from "../../assets/austin-profile-pic.png"

import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div>
        <img className="header__image" src={headerImage} />
      </div>
      <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li"><NavLink className="header__navlink"><button><h4>SPEAK</h4></button></NavLink></li>
            <li className="header__li"><NavLink className="header__navlink"><button><h4>STUDY</h4></button></NavLink></li>
            <li className="header__li header__li--image"><NavLink><img className="header__profile-img" src={profilePic}/></NavLink></li>
          </ul>
        </nav>
    </div>
  );
};

export default Header;
