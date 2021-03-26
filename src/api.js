import axios from 'axios';

export function GetUserData() {
    return axios.get(`https://605aee7827f0050017c05972.mockapi.io/users`);
}

export function PostUserData(data) {
    return axios.post(`https://605aee7827f0050017c05972.mockapi.io/users`, data);
}

export function GetUserById(id) {
    return axios.get(`https://605aee7827f0050017c05972.mockapi.io/users/${id}`);
}

export function EditUserById(id,data){
    return axios.put(`https://605aee7827f0050017c05972.mockapi.io/users/${id}`, data);
}

export function DeleteUserById(id){
    return axios.delete(`https://605aee7827f0050017c05972.mockapi.io/users/${id}`)
}