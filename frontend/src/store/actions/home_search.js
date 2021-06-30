import Axios from "../../api";

const topRestaurants = (data) => {
    return {
        type: 'SEARCH_RESULTS',
        payload: data
    }
}

export const search = (type, search) => async(dispatch) => {
    const url = `search/?type=${type}&search=${search}`
    const response = await Axios.get(url)
    dispatch(topRestaurants(response.data))
}