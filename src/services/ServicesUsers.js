import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

let getUsers = () => axiosInstance('/users');
let getUser = (id) => axiosInstance('/users' + id);
let getUserPosts = () => axiosInstance('/posts');
// let getPost = (id) => axiosInstance('/posts' + id);



export{getUsers,getUser, getUserPosts}