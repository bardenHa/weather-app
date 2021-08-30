const ResultForm = () => {
  return (
    <div className="w-full max-w-sm bg-white mx-auto mx-2 py-8 rounded-md text-regular shadow">
      <div className="mx-8 mt-4 pb-4 border-b border-gray-300">
        <h2 className="text-left text-2xl font-bold">London, GB</h2>
      </div>
      <div className="flex mx-8 mt-4 pb-4 border-b border-gray-300 items-center justify-center">
        <img
          src="https://openweathermap.org/img/wn/04d@2x.png"
          alt="weather icon"
          className="h-8 md:h-12 border rounded-full bg-gray-300"
        />
        <h1 className="flex text-left text-lg md:text-xl px-4 whitespace-nowrap">
          15°C • Overcast
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
                16.4°C
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                High
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                36.6°C
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Feels like
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                36.6°C
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Wind speed
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                12 m/s
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Pressure
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                1000 hPa
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Humidity
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                12%
              </td>
            </tr>
            <tr className="border-none">
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Cloudiness
              </th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                12%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultForm;
