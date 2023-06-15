import { NavLink } from "react-router-dom";

import headerImage from "../../assets/images/half-header.png";
import profilePic from "../../assets/images/austin-profile-pic.png";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header__container">
      <div>
        <img className="header__image" src={headerImage} />
      </div>
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <NavLink to={"/my-tutor/en/0"} className="header__navlink">
              <button className="header__button">MyTUTOR</button>
            </NavLink>
          </li>
          <li className="header__li">
            <NavLink className="header__navlink">
              <button className="header__button">STUDY</button>
            </NavLink>
          </li>
          <li className="header__li">
            <NavLink>
              <button className="header__button--img">
                <img className="header__profile-img" src={profilePic} />
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
