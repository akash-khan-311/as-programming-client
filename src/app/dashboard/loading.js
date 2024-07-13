import { ScaleLoader } from "react-spinners";

const Loader = ({ smallHeight }) => {
    return (
        <div
            className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center absolute left-1/2`}
        >
            <ScaleLoader size={100} color="#FF1493" />
        </div>
    );
};

export default Loader;