import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

function tokenService(input) {
    return axios.post('agent/api/token/', input)
}

function postLoginService(input) {
    return axios.get('agent/get-details')
}

function registerService(input) {
    return axios.post('agent/register', input)
}