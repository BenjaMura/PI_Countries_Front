/* eslint-disable react-hooks/exhaustive-deps */
import stylesHome from "./Home.module.css";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities, sortByName, sortByPopulation, filterContinent, filterActivity, reset } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const { countries, numPage, activities, countriesCopy } = useSelector((state) => state);

    useEffect(() => {
        if (!countriesCopy.length) dispatch(getCountries());
        if (!activities.length) dispatch(getActivities());
    }, []);

    let first = (numPage - 1) * 10;
    let second = numPage * 10;
    let pages = Math.ceil(countries.length / 10);
    let currentCountries = countries.slice(first, second);

    const handleSortByName = (event) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(sortByName(value));
    };
    const handleSortByPopulation = (event) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(sortByPopulation(value));
    };
    const handleFilterContinent = (event) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(filterContinent(value));
    };
    const handleFilterActivity = (event) => {
        event.preventDefault();
        const { value } = event.target;
        dispatch(filterActivity(value));
    };

    const handleReset = () => {
        dispatch(reset());
        const selectElements = document.querySelectorAll("select");
        selectElements.forEach((select) => {
            select.value = "default";
        });
    };

    return (
        <div className={stylesHome.divHome}>
            <div className={stylesHome.divFilters}>
                <select className={stylesHome.selFilters} onChange={handleSortByName} name="sortByName" defaultValue={"default"}>
                    <option value="default" disabled>Sort by Name...</option>
                    <option value="A - Z">A - Z</option>
                    <option value="Z - A">Z - A</option>
                </select>
                <select className={stylesHome.selFilters} onChange={handleSortByPopulation} name="sortByPopulation" defaultValue={"default"}>
                    <option value="default" disabled>Sort by Population...</option>
                    <option value="Max - Min">Max - Min</option>
                    <option value="Min - Max">Min - Max</option>
                </select>
                <select className={stylesHome.selFilters} onChange={handleFilterContinent} name="filterContinent" defaultValue={"default"}>
                    <option value="default" disabled>Filter by Continent</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Asia">Asia</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
                <select className={stylesHome.selFilters} onChange={handleFilterActivity} name="filterActivity" defaultValue={"default"}>
                    <option value="default" disabled>Filter by Activity</option>
                    {activities?.map(activity => {
                        return (
                            <option key={activity.id} value={activity.name}>{activity.name}</option>)})}
                </select>
                <button className={stylesHome.btnReset} onClick={handleReset}>Reset</button>
            </div>
            <div className={stylesHome.divPag}>
                <Pagination pages={pages}/>
            </div>
            <div className={stylesHome.divCards}>
                <CardsContainer currentCountries={currentCountries}/>
            </div>
            {!countries.length && <div className={stylesHome.divNotFound}>Countries Not Found <button className={stylesHome.btnResetNF} onClick={handleReset}>Reset</button></div>}
        </div>
    )
};

export default Home;