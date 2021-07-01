import Axios from "../../api";

const getComments = (data) => {
    return {
        type: 'REVIEW_COMMENTS',
        payload: data
    }
}

export const fetchComments = (id) => async(dispatch) => {
    const url = `review/comments/${id}/`
    const response = await Axios.get(url)
    dispatch(getComments(response.data))
}
