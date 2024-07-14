const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      <div className="relative flex backdrop-blur-xl min-h-[500px] flex-col rounded-xl bg-white/30 text-white shadow-md animate-pulse">
        <div className="relative mx-4 mt-4 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <div className="w-full h-full bg-gray-300"></div>
        </div>
        <div className="p-6">
          <div className="mb-2 h-6 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="mt-2 h-4 w-5/6 bg-gray-300 rounded"></div>
        </div>
        <div className="flex justify-between items-center pr-4">
          <div className="pl-6 flex flex-1 items-center py-3">
            <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          </div>
          <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
        </div>
        <div className="bottom-5 w-full absolute btn py-2 text-sm bg-gray-300"></div>
      </div>
      <div className="relative flex backdrop-blur-xl min-h-[500px] flex-col rounded-xl bg-white/30 text-white shadow-md animate-pulse">
        <div className="relative mx-4 mt-4 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <div className="w-full h-full bg-gray-300"></div>
        </div>
        <div className="p-6">
          <div className="mb-2 h-6 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="mt-2 h-4 w-5/6 bg-gray-300 rounded"></div>
        </div>
        <div className="flex justify-between items-center pr-4">
          <div className="pl-6 flex flex-1 items-center py-3">
            <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          </div>
          <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
        </div>
        <div className="bottom-5 w-full absolute btn py-2 text-sm bg-gray-300"></div>
      </div>
      <div className="relative flex backdrop-blur-xl min-h-[500px] flex-col rounded-xl bg-white/30 text-white shadow-md animate-pulse">
        <div className="relative mx-4 mt-4 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <div className="w-full h-full bg-gray-300"></div>
        </div>
        <div className="p-6">
          <div className="mb-2 h-6 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="mt-2 h-4 w-5/6 bg-gray-300 rounded"></div>
        </div>
        <div className="flex justify-between items-center pr-4">
          <div className="pl-6 flex flex-1 items-center py-3">
            <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          </div>
          <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
        </div>
        <div className="bottom-5 w-full absolute btn py-2 text-sm bg-gray-300"></div>
      </div>
    </div>
  );
};
export default SkeletonCard;
