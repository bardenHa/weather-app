import { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="w-full max-w-sm bg-white mx-auto mx-2 py-8 rounded-md">
        <div className="flex items-center mx-8 space-x-3">
          <input
            className="w-full border-2 border-black rounded-md py-0.5"
            type="text"
          />
          <button className="flex-shrink-0 py-1 px-2 bg-blue-600 rounded-md text-white">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
