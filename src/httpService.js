import axios from "axios";
const baseURL="https://youthlab-assign.onrender.com";
function get(url)
{   console.log(url)
    return axios.get(baseURL + url);

}
export default{
    get,
};