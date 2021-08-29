import React, { Component } from "react";

class Credit extends Component {
  render() {
    return (
      <div>
        <div className="text-center my-6">
          Powered with{" "}
          <a href={"https://openweathermap.org/api"} title="OpenWeather API">
            OpenWeather API
          </a>
        </div>
        <div className="text-center my-6">
          Icons made by{" "}
          <a href={"https://www.freepik.com"} title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href={"https://www.flaticon.com/"} title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }
}

export default Credit;
