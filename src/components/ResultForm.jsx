import { Component } from "react";

class ResultForm extends Component {
  render() {
    return (
      <div className="w-full max-w-sm bg-white mx-auto mx-2 py-8 rounded-md text-regular">
        <div className="mx-8 mt-4">
          <h1 className="text-left text-2xl font-bold">London, GB</h1>
        </div>
        <div className="mx-8 mt-4">
          <table className="w-full table-fixed border-gray-200 border-collapse">
            <tr className="border-none">
              <th className="w-1/4 py-2 border-b border-gray-300">Low</th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                16.4 C
              </td>
            </tr>
            <tr className="border-none">
              <th className="w-1/4 py-2 border-b border-gray-300">High</th>
              <td className="py-2 px-4 border-b border-gray-300 text-right">
                36.6 C
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ResultForm;
