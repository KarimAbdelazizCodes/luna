import Axios from "../../api";

const userData = (data) => {
    return {
        type: 'USERDATA',
        payload: data
    }
}

export const fetchUserData = () => async dispatch => {
    const url = 'me/'
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const response = await Axios.get(url, config)
    dispatch(userData(response.data))
}