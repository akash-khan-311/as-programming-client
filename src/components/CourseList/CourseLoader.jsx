import { ScaleLoader } from "react-spinners";

const CourseLoader = () => {
  return (
    <div
      className=" flex 
      flex-col 
      justify-center 
      items-center h-[calc(100vh-600px)]"
    >
      <ScaleLoader size={100} color="#FF1493" />
    </div>
  );
};
export default CourseLoader;
