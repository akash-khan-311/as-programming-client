import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaDollarSign } from "react-icons/fa";

const CourseCard = ({ data }) => {

    const { img, name, description, price, id, } = data;
    return (
        <div className="relative flex backdrop-blur-xl min-h-[500px] flex-col rounded-xl bg-white/30 text-white shadow-md">
            <div className="relative mx-4 mt-4  h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <Image
                    src={img}
                    alt="img-blur-shadow"
                    className="w-full h-full"
                    layout="fill"
                />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {description}
                </p>
            </div>
            <div className="flex justify-between items-center ">
                <div className="pl-6 flex flex-1  items-center py-3">
                    <span className="text-xl">
                        <FaDollarSign />
                    </span>
                    <p className="">Price : {price}</p>
                </div>

            </div>
            <Link className="btn my-6 mx-6 text-sm" href={`/courses/${id}`}>View Details</Link>
        </div>
    )
}
export default CourseCard;