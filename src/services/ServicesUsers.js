import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

let getUsers = () => axiosInstance('/users');
let getUser = (id) => axiosInstance('/users/' + id);
let getUserPosts = (id) => axiosInstance('/users/' + id + '/posts');
let getPosts = () => axiosInstance('posts');
let getPostComment = (id) => axiosInstance('/posts/' +id)

export{getUsers,getUser, getUserPosts, getPosts, getPostComment}






// posts/1/comments
// import axios from 'axios';

// const axiosInstance = axios.create ({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
// const getUsers = () => axiosInstance('/users');
// const getUserPosts = (id) => axiosInstance('/users/' + id + '/posts');
// const getPosts = () => axiosInstance('/posts');
// const getPost = (id) => axiosInstance('/posts/' + id);
// const getComments = () => axiosInstance('/comments');
// const getPostComment = (id) => axiosInstance('/posts/' + id);
//
// export{getUsers, getUserPosts, getPost , getPosts, getPostComment, getComments}