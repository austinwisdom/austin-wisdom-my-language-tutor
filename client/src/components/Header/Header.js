import { NavLink, Link } from "react-router-dom";

import headerImage from "../../assets/images/half-header.png";
import profilePic from "../../assets/images/austin-profile-pic.png";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header__container">
      <div>
        <Link to={"/"}><button className="header__button--home"><img className="header__image" src={headerImage} /></button></Link>
      </div>
      <nav className="header__nav">
        <ul className="header__ul">
        <li className="header__li">
            <NavLink to={"/"} className="header__navlink">
              <button className="header__button">HOME</button>
            </NavLink>
          </li>
          <li className="header__li">
            <NavLink to={"/my-tutor/en/0"} className="header__navlink">
              <button className="header__button">MyTUTOR</button>
            </NavLink>
          </li>
          <li className="header__li">
            <NavLink to={"/study"} className="header__navlink">
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
