import Axios from "../../api";

const categories = (data) => {
    return {
        type: 'CATEGORIES',
        payload: data
    }
}

export const fetchCategories = () => async dispatch => {
    const url = 'category/list/'
    const response = await Axios.get(url)
    dispatch(categories(response.data))
}