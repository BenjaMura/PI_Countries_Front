import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, NEXT_PAGE, PREV_PAGE, NUMBER_PAGE, GET_COUNTRY_BY_ID, CLEAN_DETAIL, GET_ACTIVITY_BY_ID, CLEAN_ACTIVITY, POST_ACTIVITY, RESET, GET_ACTIVITIES, SORT_BY_NAME, SORT_BY_POPULATION, FILTER_CONTINENT, FILTER_ACTIVITY, DELETE_ACTIVITY, PUT_ACTIVITY_BY_ID, LOADING, NO_LOADING } from "./actionsTypes";

const initialState = {
    countries: [],
    countriesCopy: [],
    countryDetail: {},
    activityDetail: {},
    activities: [],
    numPage: 1,
    loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesCopy: payload,
                loading: false,
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload,
                loading: false,
            };
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: payload,
                numPage: 1,
                loading: false,
            };
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1
            };
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
            };
        case NUMBER_PAGE:
            return {
                ...state,
                numPage: payload,
            };
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                countryDetail: payload,
                loading: false,
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                countryDetail: {},
            };
        case GET_ACTIVITY_BY_ID:
            return {
                ...state,
                activityDetail: payload,
                loading: false,
            };
        case CLEAN_ACTIVITY:
            return {
                ...state,
                activityDetail: {},
            };
        case POST_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, payload],
            };
        case PUT_ACTIVITY_BY_ID:
            return { ...state };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case NO_LOADING:
            return {
                ...state,
                loading: false,
            };
        case SORT_BY_NAME:
            return {
                ...state,
                countries:
                    payload === "A - Z"
                        ? state.countries.sort((a, b) => a.name > b.name)
                        : state.countries.sort((a, b) => a.name < b.name),
                numPage: 1,
            };
        case SORT_BY_POPULATION:
            return {
                ...state,
                countries:
                    payload === "Max - Min"
                        ? state.countries.sort((a, b) => a.population < b.population)
                        : state.countries.sort((a, b) => a.population > b.population),
                numPage: 1,
            };
        case FILTER_CONTINENT:
            return {
                ...state,
                countries: state.countries
                    .filter(country => country.continent === payload),
                numPage: 1,
            };
        case FILTER_ACTIVITY:
            return {
                ...state,
                countries: state.countries
                    .filter(country => country.Activities
                        .some(activity => activity.name === payload)),
                numPage: 1,
            };
        case RESET:
            return {
                ...state,
                countries: state.countriesCopy,
                numPage: 1,
            };
        case DELETE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== payload),
                numPage: 1,
                loading: false,
            };
        default:
            return { ...state };
    }
};

export default reducer;