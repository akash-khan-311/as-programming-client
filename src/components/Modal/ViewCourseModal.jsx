import { updateCourseStatus } from "@/api/courses";
import {
  Button,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";

const ViewCourseModal = ({ course, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);

  const handleShowToast = () => {
    toast.success("This Course is Now Live! ❤️");
  };

  const handleApprove = async () => {
    const result = await updateCourseStatus(course?._id);

    if (result.modifiedCount > 0 && result.acknowledged) {
      toast.success("Course approved successfully");
      refetch();
      setIsOpen(false);
    }
  };

  return (
    <>
      {course?.status === "pending" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-600 px-4 py-[2px] rounded-md text-white"
        >
          View
        </button>
      ) : (
        <span
          onClick={handleShowToast}
          className="text-white bg-green-600 py-[2px] px-4 rounded-md cursor-pointer"
        >
          Aproved
        </span>
      )}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed backdrop-blur-sm bg-black/60 inset-0 z-10 w-screen overflow-auto">
          <div className="flex min-h-full overflow-hidden items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl  p-6 backdrop-blur-2xl bg-white/30 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="w-full rounded-md">
                <Image
                  className="w-full rounded-md"
                  src={course?.img}
                  width={600}
                  height={600}
                  alt={course?.title}
                />
              </div>
              <div>
                <DialogTitle
                  as="h1"
                  className="text-lg md:text-xl lg:text-2xl  font-medium text-white"
                >
                  {course?.title}
                </DialogTitle>
                <p className="mt-2 text-sm text-white/50">
                  {course?.description}
                </p>
                <ul className="flex flex-col md:flex-row justify-between md:items-center">
                  <div>
                    <li className="mt-2 text-sm text-white/50">
                      Category: {course?.category}
                    </li>
                    <li className="mt-2 text-sm text-white/50">
                      Level: {course?.level}
                    </li>
                  </div>
                  <div>
                    <li className="mt-2 text-sm text-white/50">
                      Duration: {course?.duration}
                    </li>
                    <li className="mt-2 text-sm text-white/50">
                      Price: {course?.price} (BDT)
                    </li>
                  </div>
                </ul>

                <div className="mt-4 flex justify-between">
                  <Button
                    className="bg-red-500 text-white px-5 py-1 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-green-500 text-white px-5 py-1 rounded-md"
                    onClick={handleApprove}
                  >
                    Approve
                  </Button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ViewCourseModal;
