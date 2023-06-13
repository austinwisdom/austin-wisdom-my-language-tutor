import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <nav>
                <ul>
                    <NavLink></NavLink>
                    <NavLink></NavLink>
                    {/* user profile pic goes here with dropdown */}
                    <img></img>
                </ul>
            </nav>
        </div>
    );
};

export default Header;