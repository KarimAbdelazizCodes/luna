import Axios from "../../api";

const userComments = (data) => {
    return {
        type: 'USERCOMMENTS',
        payload: data
    }
}

export const fetchUserComments = (id) => async dispatch => {
    const url = `review/comment/${id}/`
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const response = await Axios.get(url, config)
    dispatch(userComments(response.data))
}