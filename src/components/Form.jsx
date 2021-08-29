import { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="w-full max-w-sm bg-white mx-auto mx-2 py-8 rounded-md">
        <div className="flex items-center mx-8 space-x-3">
          <input
            className="w-full border-2 text-black bg-gray-200 rounded-md p-0.5 px-1.5 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400"
            type="text"
            placeholder="What city?"
          />
          <button className="font-regular flex-shrink-0 py-1 px-2 bg-blue-500 rounded-md text-white focus:outline-none hover:bg-blue-600">
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
