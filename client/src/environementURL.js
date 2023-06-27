const productionURL = "https://foodchive-api-u1da.onrender.com";
const developmentURL = "http://localhost:3000";

export const environmentURL =
  process.env.NODE_ENV === "production" ? productionURL : developmentURL;
