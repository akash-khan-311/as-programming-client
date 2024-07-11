const ToggleButton = ({ toggleHandler }) => {
  return (
    <>
      <label
        htmlFor="Toggle3"
        className="inline-flex  w-full justify-center items-center px-2 rounded-md cursor-pointer"
      >
        <input
          onChange={toggleHandler}
          type="checkbox"
          id="Toggle3"
          className="hidden peer  "
        />
        <span className="px-4 py-1 rounded-l-md bg-pink-600 peer-checked:backdrop-blur-md peer-checked:bg-white/10 peer-checked:text-white text-white">
          User
        </span>
        <span className="px-4 py-1 text-white rounded-r-md backdrop-blur-md bg-white/10 peer-checked:bg-pink-600">
          Teacher
        </span>
      </label>
    </>
  );
};
export default ToggleButton;
