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
      <div className="text-center text-xs mt-48">
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
