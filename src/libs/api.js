import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export function fetchPosts() {
  return axios.get(`${baseUrl}/posts`);
}

export function fetchPost(id) {
  return axios.get(`${baseUrl}/posts/${id}`);
}
