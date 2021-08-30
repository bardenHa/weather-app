import leftArrow from "../img/left-arrow.png";

const ResultForm = ({ goBack, weatherData }) => {
  return (
    <div className="w-full max-w-sm bg-white mx-auto mx-2 py-8 rounded-md text-regular shadow">
      <div className="mx-8 mt-4 pb-4 border-b border-gray-300">
        <h2 className="text-left text-2xl font-bold">
          {weatherData.name}, {weatherData.sys.country}
        </h2>
      </div>
      <div className="flex mx-8 mt-4 pb-4 border-b border-gray-300 items-center justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="h-8 md:h-12 border rounded-full bg-gray-300"
        />
        <h1 className="flex text-left text-sm md:text-xl px-4 whitespace-nowrap capitalize">
          {weatherData.main.temp}°C • {weatherData.weather[0].description}
        </h1>
      </div>
      <div className="mx-8 mt-4">
        <table className="w-full table-fixed border-gray-200 border-collapse">
          <tbody>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Low
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                {weatherData.main.temp_min}°C
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                High
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                {weatherData.main.temp_max}°C
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Feels like
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                {weatherData.main.feels_like}°C
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Wind speed
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                {weatherData.wind.speed} m/s
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Pressure
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                {weatherData.main.pressure} hPa
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Humidity
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                {weatherData.main.humidity}%
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Cloudiness
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                {weatherData.clouds.all}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex mx-8 mt-8 justify-center">
        <button
          onClick={(e) => goBack(e)}
          className="flex items-center space-x-4 content-center font-regular flex-shrink-0 py-1 px-4 bg-blue-500 rounded-md text-white focus:outline-none hover:bg-blue-600"
        >
          <p className="">Back</p>
          <img src={leftArrow} className="h-8" alt="back arrow" />
        </button>
      </div>
    </div>
  );
};

export default ResultForm;
