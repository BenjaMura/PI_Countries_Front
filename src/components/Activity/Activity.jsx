import { useDispatch } from "react-redux";
import stylesActivity from "./Activity.module.css";
import { deleteActivity } from "../../redux/actions";
import { Link } from "react-router-dom";

const Activity = (activities) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        if (confirm("Are you sure want to delete the activity?")) {
            dispatch(deleteActivity(activities.id));
            alert("The activity has been successfully deleted");
            }
    };

    return (
        <div className={stylesActivity.div}>
            <div className={stylesActivity.divbtn}>
                <button onClick={handleDelete}>❌</button>
            </div>
            <Link to={`/edit/${activities.id}`}>
                <button className={stylesActivity.btnEdit}>✏️</button>
            </Link>
            <div className={stylesActivity.divAct}>
                <h3>{activities.name}</h3>
                <h4>Difficulty: {activities.difficulty}/5</h4>
                <h4>Duration: {activities.duration} hs</h4>
                <h4>Season: {activities.season === "Spring" ? <> {activities.season} 🌸</> : null}
                            {activities.season === "Winter" ? <> {activities.season} ❄️</> : null}
                            {activities.season === "Autumn" ? <> {activities.season} 🍂</> : null}
                            {activities.season === "Summer" ? <> {activities.season} ☀️</> : null}</h4>
                <h4>Countries: {activities.Countries?.map((country, index) => {
                    return (
                        <img key={index} src={country.flag} alt={country.name} title={country.name}/>
                    )
                })}</h4>
            </div>
        </div>
    );
};

export default Activity;