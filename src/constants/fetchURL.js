export const cityNameUrl = (cityName, _apiKey) =>
  `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${_apiKey}`;
