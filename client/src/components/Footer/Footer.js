import footerImage from "../../assets/half-footer.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__image--container">
        <ul className="footer__ul">
          <li className="footer__li">
            <p className="footer__p">Copyright MyLanguageTutor 2023</p>
          </li>
        </ul>
        <img className="footer__image" src={footerImage} />
      </div>
    </footer>
  );
};

export default Footer;
