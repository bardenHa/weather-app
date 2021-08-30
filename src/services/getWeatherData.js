import * as fetchURL from "../constants/fetchURL";

const _apiKey = process.env.REACT_APP_API_KEY;

export const getWeatherData = (cityName) => {
  const url = fetchURL.cityNameUrl(cityName, _apiKey);

  const call = fetch(url, { mode: "cors" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

  return call;
};
