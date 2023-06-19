/* eslint-disable react/prop-types */
import stylesActivitiesContainer from "./ActivitiesContainer.module.css";
import Activity from "../Activity/Activity";

const ActivitiesContainer = ({activities}) => {
    return (
        <div className={stylesActivitiesContainer.div}>
            <h2>ACTIVITIES</h2>
            <div>
            {activities?.map(activity => {
                return (
                    <Activity
                        key={activity.id} 
                        id={activity.id} 
                        name={activity.name}
                        difficulty={activity.difficulty}
                        duration={activity.duration}
                        season={activity.season}
                        Countries={activity.Countries}
                    />
                );
            })}
            </div>
        </div>
    );
};

export default ActivitiesContainer;