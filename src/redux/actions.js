import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, NEXT_PAGE, PREV_PAGE, NUMBER_PAGE, GET_COUNTRY_BY_ID, CLEAN_DETAIL, POST_ACTIVITY, RESET, GET_ACTIVITIES, SORT_BY_NAME, SORT_BY_POPULATION, FILTER_CONTINENT, FILTER_ACTIVITY, DELETE_ACTIVITY, PUT_ACTIVITY_BY_ID, LOADING, NO_LOADING } from "./actionsTypes";

const URL = "https://pi-countries-back-dmol.onrender.com";

export const getCountries = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING })
            const { data } = await axios.get(`${URL}/countries`);
            if (!data.length) throw Error();
            return dispatch({ type: GET_COUNTRIES, payload: data})
        } catch (error) {
            alert("Countries couldn't be loaded");
            dispatch({ type: NO_LOADING })
        }
    };
};

export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING })
            const { data } = await axios.get(`${URL}/countries/name?name=${name}`);
            if (!data) throw Error();
            return dispatch({ type: GET_COUNTRY_BY_NAME, payload: data})
        } catch (error) {
            alert("Try another name please");
            dispatch({ type: NO_LOADING })
        }
    };
};

export const getCountryById = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING })
            const { data } = await axios.get(`${URL}/countries/${id}`);
            if (!data) throw Error();
            return dispatch({ type: GET_COUNTRY_BY_ID, payload: data})
        } catch (error) {
            alert("Couldn't load the detail of the country");   
            dispatch({ type: NO_LOADING })        
        }
    };
};

export const postActivity = (form) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL}/activities`, form);
            if (!data) throw Error();
            return dispatch({ type: POST_ACTIVITY, payload: data });
        } catch (error) {
            alert("The activity already exists")
        }
    };
};

export const getActivities = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING })
            const { data } = await axios.get(`${URL}/activities`);
            if (!data.length) throw Error();
            return dispatch({ type: GET_ACTIVITIES, payload: data})
        } catch (error) {
            alert("No activities available");
            dispatch({ type: NO_LOADING })
        }
    };
};

export const deleteActivity = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING })
            const { data } = await axios.delete(`${URL}/activities/${id}`);
            if (!data) throw Error();
            return dispatch({ type: DELETE_ACTIVITY, payload: id})
        } catch (error) {
            alert("Couldn't delete the activity");
            dispatch({ type: NO_LOADING })
        }
    };
};

export const editActivity = (form, id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${URL}/activities/edit/${id}`, form);
            if (!data) throw Error();
            return dispatch({ type: PUT_ACTIVITY_BY_ID, payload: data})
        } catch (error) {
            alert("Couldn't modify the activity");           
        }
    };
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    };
};

export const sortByName = (value) => {
    return {
        type: SORT_BY_NAME,
        payload: value,
    };
};
export const sortByPopulation = (value) => {
    return {
        type: SORT_BY_POPULATION,
        payload: value,
    };
};
export const filterContinent = (value) => {
    return {
        type: FILTER_CONTINENT,
        payload: value,
    };
};
export const filterActivity = (value) => {
    return {
        type: FILTER_ACTIVITY,
        payload: value,
    };
};

export const nextPage = () => {
    return {
        type: NEXT_PAGE,
    };
};
export const prevPage = () => {
    return {
        type: PREV_PAGE,
    };
};
export const numberPage = (number) => {
    return {
        type: NUMBER_PAGE,
        payload: number,
    };
};

export const reset = () => {
    return {
        type: RESET,
    };
};