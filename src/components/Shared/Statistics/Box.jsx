const Box = ({ icon: Icon, title, value, loading }) => {
  return (
    <>
      <div className="w-full p-4 backdrop-blur-md bg-white/20 rounded-xl text-center">
        {loading ? (
          <div className="mx-auto flex flex-col items-center space-y-3">
            <span className="flex justify-center items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
            </span>
            <div className="mt-3 space-y-2">
              <div className="w-20 h-10 bg-gray-300 animate-pulse"></div>
              <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        ) : (
          <>
            <span className="mx-auto flex justify-center ">
              <Icon className="w-10 h-10  text-white" />
            </span>
            <div className="mt-3">
              <h2 className="text-5xl text-white font-semibold">{value}</h2>
              <h4 className="text-lg text-white">{title}</h4>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Box;
