import { Link } from "react-router-dom";
import stylesLanding from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={stylesLanding.div}>
            <h1 className={stylesLanding.h1}>WELCOME!</h1>
            <Link to="/home" className={stylesLanding.link}>
                <button className={stylesLanding.btn}>
                    🔎
                </button>
            </Link>
            <h2 className={stylesLanding.h2}>Take a look</h2>
        </div>
    );
};

export default Landing;