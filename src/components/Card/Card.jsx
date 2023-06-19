import { Link } from "react-router-dom";
import stylesCard from "./Card.module.css";

const Card = (countries) => {
    return (
        <Link to={`/detail/${countries.id}`} className={stylesCard.link}>
            <div className={stylesCard.div}>
            <img className={stylesCard.img} src={countries.flag} alt={countries.name}/>
            <h2 className={stylesCard.h2}>{countries.name}</h2>
            <h3 className={stylesCard.h3}>{countries.continent}</h3>
            </div>
        </Link >
    )
};

export default Card;