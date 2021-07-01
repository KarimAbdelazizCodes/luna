import Axios from "../../api";

const restaurants = (data) => {
    return {
        type: 'RESTAURANT',
        payload: data
    }
}

export const fetchRestaurant = (id) => async dispatch => {
    const url = `restaurants/${id}/`
    const response = await Axios.get(url)
    dispatch(restaurants(response.data))
}