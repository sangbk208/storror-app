import axios from 'axios';

export default axios.create({
    baseURL: "https://server-storror-sbk-app.herokuapp.com/products",
});