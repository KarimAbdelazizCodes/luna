import Axios from "../../api";

const userRestaurant = (data) => {
    return {
        type: 'USERRAURANT',
        payload: data
    }
}

export const fetchUserRestaurant = (id) => async dispatch => {
    const url = `restaurants/user/${id}/`
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const response = await Axios.get(url, config)
    dispatch(userRestaurant(response.data))
}