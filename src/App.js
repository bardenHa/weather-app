import { Component } from "react";
import Credit from "./components/Credit";

class App extends Component {
  render() {
    return (
      <div className="App p-6 h-screen bg-gray-100">
        <div className="py-6 max-w-2xl mx-auto bg-blue-600 shadow-md text-center rounded-md">
          <p className="text-5xl text-white font-title">Weather App</p>
        </div>
        <Credit />
      </div>
    );
  }
}

export default App;
