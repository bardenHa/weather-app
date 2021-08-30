const Credit = () => {
  return (
    <div>
      <div className="text-center text-xl my-8">
        Powered with{" "}
        <a
          href={"https://openweathermap.org/api"}
          title="OpenWeather API"
          className="text-blue-600 font-bold"
        >
          OpenWeather API
        </a>
      </div>
      <div className="text-center text-sm mt-24">
        <div className="w-full max-w-sm bg-white mx-auto mx-2 py-4 rounded-md shadow">
          <div className="items-center mx-4">
            Copyright © 2021 - Harry Barden •
            <a
              href="https://github.com/bardenHa/weather-app/blob/main/LICENSE"
              className="hover:underline mx-1"
            >
              {" "}
              License
            </a>
            •
            <a
              href="https://github.com/bardenHa/weather-app/"
              className="hover:underline mx-1"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-24">
        Favicon made by{" "}
        <a
          href={"https://www.freepik.com"}
          title="Freepik"
          className="text-blue-600"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          href={"https://www.flaticon.com/"}
          title="Flaticon"
          className="text-blue-600"
        >
          www.flaticon.com
        </a>
      </div>
      <div className="text-center text-xs mt-3">
        <a href="https://icons8.com/icon/7811/left" className="text-blue-600">
          Left
        </a>{" "}
        icon by{" "}
        <a href="https://icons8.com" className="text-blue-600">
          Icons8
        </a>
      </div>
    </div>
  );
};

export default Credit;
