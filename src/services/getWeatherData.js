import * as fetchURL from "../constants/fetchURL";

const _apiKey = process.env.REACT_APP_API_KEY;

console.log(_apiKey);

export const getWeatherData = (cityName) => {
  cityName = "London";
  console.log(fetchURL.cityNameUrl(cityName, _apiKey));
};
