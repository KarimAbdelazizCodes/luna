// fetch top 4 restaurants for home page
import Axios from "../../api";

const topRestaurants = (data) => {
    return {
        type: 'TOP_RESTAURANTS',
        payload: data
    }
}

export const fetchTopRestaurants = async (dispatch) => {
    const url = 'home/'
    const response = await Axios.get(url)
    dispatch(topRestaurants(response.data))
}

