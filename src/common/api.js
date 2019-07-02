// class API {}

// export default API;

import axios from "axios"

// Make a request for a user with a given ID

// function getTags() {
//     return axios.get('https://dev.to/api/tags');
// }

export function getArticles() {
    return axios.get('https://dev.to/api/articles');
}

// const art = getReturn();
// getReturn().then(data => console.log(data))
// console.log(getArticles());
// //   .then(function (response) {
// //     // handle success
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     // handle error
// //     console.log(error);
// //   })
// //   .finally(function () {
// //     // always executed
// //   });


