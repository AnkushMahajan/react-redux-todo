import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS'
export const SAVE_POSTS = 'SAVE_POSTS'
export const GET_POST = 'GET_POST'
export const DELETE_POST = 'DELETE_POST'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=ABCD12345'

export const fetchPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export const savePost = (values, cb) => {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => cb())

    return {
        type: SAVE_POSTS,
        payload: request
    }
}

export const getPost = (id) => {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

    return {
        type: GET_POST,
        payload: request
    }
}

export const deletePost = (id, cb) => {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => cb())

    return {
        type: DELETE_POST,
        payload: id
    }
}