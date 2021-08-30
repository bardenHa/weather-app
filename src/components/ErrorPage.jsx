import leftArrow from "../img/left-arrow.png";

const ErrorPage = ({ goBack, error, errorCode }) => {
  return (
    <div className="w-full max-w-sm bg-white mx-auto mx-2 py-8 rounded-md text-regular shadow">
      <div className="mx-8 pb-4 border-b border-gray-300">
        <h2 className="text-left text-2xl font-bold">Error: {errorCode}</h2>
      </div>
      <div className="mx-8 mt-4 pb-4 text-left text-xl capitalize">{error}</div>
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

export default ErrorPage;
