import Axios from "../../api";

const restaurantReviews = (data) => {
    return {
        type: 'RESTAURANT_REVIEWS',
        payload: data
    }
}

export const fetchReviews = (id) => async(dispatch) => {
    const url = `/reviews/restaurant/${id}/`
    const response = await Axios.get(url)
    dispatch(restaurantReviews(response.data))
}