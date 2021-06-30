import Axios from "../../api/"

// -- This is an exeple Action with Axios used -- //
export const getUser = () => (dispatch, getStore) => {
    const store = getStore();
    const url = "users/me/";
    const config = {
      headers: {
        Authorization: `Bearer ${store.token}`,
        "Content-Type": "application/json",
      },
    };

    Axios.get(url, config).then((response) => {
      const user = response.data
      dispatch({
          type:"GET_USER", 
          payload: user
        });
    });
}
