const ErrorPage = () => {
  return (
    <div className="w-full max-w-sm bg-white mx-auto mx-2 py-8 rounded-md text-regular shadow">
      <div className="mx-8 pb-4 border-b border-gray-300">
        <h2 className="text-left text-2xl font-bold">Error: 404</h2>
      </div>
      <div className="mx-8 mt-4 pb-4 text-left text-xl">City not found.</div>
      <div className="flex mx-8">
        <button className="font-regular flex-shrink-0 py-1 px-2 bg-blue-500 rounded-md text-white focus:outline-none hover:bg-blue-600">
          Go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
