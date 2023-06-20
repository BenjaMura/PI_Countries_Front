/* eslint-disable react-hooks/exhaustive-deps */
import stylesActivities from "./Activities.module.css";
import { useDispatch, useSelector } from "react-redux";
import ActivitiesContainer from "../../components/ActivitiesContainer/ActivitiesContainer";
import { useEffect, useState } from "react";
import { getActivities } from "../../redux/actions";
import Loading from "../../components/Loading/Loading";

const Activities = () => {
    const dispatch = useDispatch();
    const { activities, loading } = useSelector((state) => state);
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 300)
        if (!activities.length) dispatch(getActivities());
    }, [])

    return (
        <div className={stylesActivities.div}>
            {loading || load ? (
            <Loading />
            ) : (
            <>
            <div className={stylesActivities.divActs}>
                <ActivitiesContainer activities={activities}/>
            </div>
            {!activities.length && <div className={stylesActivities.divNoActivities}><h2>There are no activities</h2></div>}
            </>
            )}
        </div>
    );
};

export default Activities;
