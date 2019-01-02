import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export function fetchPosts() {
  return axios.get(`${baseUrl}/posts`);
}

export function fetchPost(id) {
  return axios.get(`${baseUrl}/posts/${id}`);
}

export function fetchUsers() {
  return axios.get(`${baseUrl}/users`);
}

export function fetchComments(id) {
  return axios.get(`${baseUrl}/comments?postId=${id}`);
}
