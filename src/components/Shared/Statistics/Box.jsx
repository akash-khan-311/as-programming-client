const Box = ({ icon: Icon, title, value }) => {
  return (
    <>
      <div className="w-full p-4 backdrop-blur-md bg-white/20 rounded-xl">
        <span className="">
          <Icon className="w-10 h-10  text-white" />
        </span>
        <div className="mt-3">
          <h2 className="text-5xl text-white font-semibold">{value}</h2>
          <h4 className="text-lg text-white">{title}</h4>
        </div>
      </div>
    </>
  );
};
export default Box;
