import stylesFooter from "./Footer.module.css";
import { Link } from "react-router-dom";
import Github from "../../assets/images/Github.png";
import Instagram from "../../assets/images/Instagram.png";
import Linkedin from "../../assets/images/Linkedin.png";

const Footer = () => {
    return (
        <div className={stylesFooter.divFoot}>
            <Link to="https://github.com/BenjaMura" target="_blank">
                <img className={stylesFooter.img} src={Github} alt="Github" title="Github"/>
            </Link>
            <Link to="https://www.linkedin.com/in/benjam%C3%ADn-muratore-8a5928192/" target="_blank">
                <img className={stylesFooter.img} src={Linkedin} alt="Linkedin" title="Linkedin"/>
            </Link>
            <Link to="https://www.instagram.com/benjaminmuratore" target="_blank">
                <img className={stylesFooter.img} src={Instagram} alt="Instagram" title="Instagram"/>
            </Link>
        </div>
    )
};

export default Footer;