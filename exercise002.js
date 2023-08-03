// import fetch from "node-fetch";

// const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

// fetchData(jsonTypicode);

import fetch from "node-fetch";

const advice = "https://api.adviceslip.com/advice"

const fetchData = async (apiEndPoint) => {
    try {
      const response = await fetch(apiEndPoint)
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.error(error);
    }
};

// fetchData(jsonTypicode);
fetchData(advice)

