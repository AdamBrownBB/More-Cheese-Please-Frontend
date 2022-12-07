// // Not sure why this breaks, only applies to cheeses when in local env

// const prod = {
//   url: {
//     API_URL: "https://more-cheese.onrender.com",
//   },
// };

// const local = {
//   url: {
//     API_URL: "http://localhost:3000",
//   },
// };

// function getConfig() {
//   console.log("process.env.REACT_APP_ENV :>> ", process.env.REACT_APP_ENV);

//   if (process.env.REACT_APP_ENV === "development") {
//     console.log("returning dev config");
//     return local;
//   } else {
//     console.log("returning NON-DEV** config");
//     return prod;
//   }
//   // console.log("config is", config);
// }





// export const config = process.env.REACT_APP_ENV === "development" ? local : prod;

// // module.exports = {
// //   config: getConfig(),
// // };
