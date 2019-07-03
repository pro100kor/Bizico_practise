import axios from "axios";

// function getTags() {
//     return axios.get('https://dev.to/api/tags');
// }

export function getArticles() {
  return axios.get("https://dev.to/api/articles");
}
