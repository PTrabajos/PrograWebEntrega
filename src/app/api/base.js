import axios from 'axios'

const  URI = 'entrega-prograweb-202301-api.azurewebsites.net';

const get = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url);
    } catch(err) {
        console.log(err);
    }
}
const post = async (endpoint, request) => {
    try{
        const url = URI.concat(endpoint);
        return await axios.post(url, request);
    } catch(err) {
        console.log(err);
        return null
    }

}