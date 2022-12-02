const prod = {
  url: {
    API_URL: "https://more-cheese.onrender.com",
  },
};

const local = {
  url: {
    API_URL: "http://localhost:3000",
  },
};

if (process.env.NODE_ENV == "development") {
  console.log("returning dev config");
  return local;
} else {
  console.log("returning non dev config");
  return prod;
}
// export const config = process.env.NODE_ENV === "development" ? local : prod;
// console.log("config is", config);

module.exports = config;
