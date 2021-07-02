import Axios from "../../api";

const newComment = (data) => {
    return {
        type: 'NEW_COMMENT',
        payload: data
    }
}

export const CreateComment = (id, text) => async(dispatch) => {

    const url = `/review/comment/new/${id}/`
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const body = {
        text: text
    }
    const response = await Axios.post(url, body, config)
    dispatch(newComment(response.data))
}