import axios from "axios";

export function getTags() {
  return axios.get("https://dev.to/api/tags");
}

export function getArticles(tagName) {
  let url = "https://dev.to/api/articles" + "?tag=" + tagName;
  return axios.get(url);
}
