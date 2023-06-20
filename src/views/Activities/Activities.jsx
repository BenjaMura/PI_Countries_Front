/* eslint-disable react-hooks/exhaustive-deps */
import stylesActivities from "./Activities.module.css";
import { useDispatch, useSelector } from "react-redux";
import ActivitiesContainer from "../../components/ActivitiesContainer/ActivitiesContainer";
import { useEffect } from "react";
import { getActivities } from "../../redux/actions";

const Activities = () => {
    const dispatch = useDispatch();
    const { activities } = useSelector((state) => state);
    useEffect(() => {
        if (!activities.length) dispatch(getActivities());
    }, [])

    return (
        <div className={stylesActivities.div}>
            <div className={stylesActivities.divActs}>
                <ActivitiesContainer activities={activities}/>
            </div>
            {!activities.length && <div className={stylesActivities.divNoActivities}><h2>There are no activities</h2></div>}
        </div>
    );
};

export default Activities;
