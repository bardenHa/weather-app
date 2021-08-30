import { Component } from "react";
import Credit from "./components/Credit";
import ErrorPage from "./components/ErrorPage";
import Form from "./components/Form";
import ResultForm from "./components/ResultForm";
import { getWeatherData } from "./services/getWeatherData";

getWeatherData();

class App extends Component {
  render() {
    return (
      <div className="App p-6 lg:p-24 h-screen bg-gray-100">
        <div className="py-6 px-2 max-w-2xl mx-auto bg-blue-600 shadow-md text-center rounded-md">
          <p className="text-5xl text-white font-title pb-6">Weather App</p>
          <Form />
        </div>
        <Credit />
      </div>
    );
  }
}

export default App;
