import axios from "axios";

//PRODUCTION
const baseURL = "https://luna-scorpio.propulsion-learn.ch/backend/api/";

//DEVELOPPEMENT
// const baseURL = "http://localhost:8000/backend/api/";

const Axios = axios.create({
  baseURL: baseURL,
});

Axios.defaults.baseURL = baseURL;
Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.patch["Content-Type"] = "application/json";

export default Axios;
