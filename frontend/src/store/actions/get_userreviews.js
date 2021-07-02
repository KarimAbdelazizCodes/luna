import Axios from "../../api";

const userReviews = (data) => {
    return {
        type: 'USERREVIEWS',
        payload: data
    }
}

export const fetchUserReviews = (id) => async dispatch => {
    const url = `reviews/user/${id}/`
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const response = await Axios.get(url, config)
    dispatch(userReviews(response.data))
}