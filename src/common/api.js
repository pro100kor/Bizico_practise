import axios from "axios";

export function getTags() {
  return axios.get("https://dev.to/api/tags");
}

export function getArticles(tagName) {
  let url = "https://dev.to/api/articles";
  if (tagName) {
    url = "https://dev.to/api/articles?tag=" + tagName;
  }
  return axios.get(url);
}

export function getUsers(username) {
  let url = "https://dev.to/api/users/by_username?url=" + username;
  return axios.get(url);
}

export function getUsersNews(username) {
  let url = "https://dev.to/api/articles?username=" + username;
  return axios.get(url);
}

export  function getNewsArticle(articleId) {
  let url = "https://dev.to/api/articles/" + articleId;
  return axios.get(url);
}
