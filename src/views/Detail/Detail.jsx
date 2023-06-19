import stylesDetail from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanDetail, getCountryById } from "../../redux/actions";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const countryDetail = useSelector((state) => state.countryDetail);

    useEffect(() => {
        dispatch(getCountryById(id));
        return () => {
            dispatch(cleanDetail());
        };
    }, [dispatch, id]);

    return (
        <div className={stylesDetail.divDetail}>
            <div className={stylesDetail.divCountry}>
                <div className={stylesDetail.divImgCountry}>
                    <img src={countryDetail.flag} alt={countryDetail.name}/>
                    <h2 className={stylesDetail.h2}>ID | {countryDetail.id}</h2>
                    <h2 className={stylesDetail.h2}>NAME | {countryDetail.name}</h2>
                    <h2 className={stylesDetail.h2}>CONTINENT | {countryDetail.continent}</h2>
                    <h2 className={stylesDetail.h2}>CAPITAL | {countryDetail.capital}</h2>
                    {countryDetail.subregion && <h2 className={stylesDetail.h2}>SUBREGION | {countryDetail.subregion}</h2>}
                    {countryDetail.area && <h2 className={stylesDetail.h2}>AREA | {countryDetail.area} km2</h2>}
                    <h2 className={stylesDetail.h2}>POPULATION | {countryDetail.population} 👨‍👩‍👧‍👦</h2>
                </div>
                {countryDetail.Activities?.length !== 0 ?
                <div className={stylesDetail.divActCountry}>
                    {countryDetail.Activities && countryDetail.Activities.length ? (<h2 className={stylesDetail.h2}>ACTIVITIES</h2>) : null}
                    {countryDetail.Activities?.map((activity, index) => {
                        return (
                            <div key={index} className={stylesDetail.divAct}>
                                <h3 className={stylesDetail.h3}>{activity.name}</h3>
                                <div className={stylesDetail.h4}>
                                    <h4>Difficulty: {activity.difficulty}/5</h4>
                                    {activity.duration && <h4>Duration: {activity.duration} hs</h4>}
                                    <h4>
                                        Season:
                                        {activity.season === "Spring" ? <> {activity.season}🌸</> : null}
                                        {activity.season === "Winter" ? <> {activity.season}❄️</> : null}
                                        {activity.season === "Autumn" ? <> {activity.season}🍂</> : null}
                                        {activity.season === "Summer" ? <> {activity.season}☀️</> : null}
                                    </h4>
                                </div>
                            </div>
                        )
                    })}
                </div> : null}
            </div>
        </div>
    );
};

export default Detail;