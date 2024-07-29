"use client";
import {
  Button,
  Dialog,
  Description,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
const SeeAssignmentDetailModal = ({ isOpen, setIsOpen, assignment }) => {
  console.log(assignment);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-20 bg-pink-600 text-white rounded-md"
      >
        See Mark
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className={`z-[999] fixed flex items-center justify-center h-screen w-screen place-items-center ${
          isOpen ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 bg-black bg-opacity-60 duration-100 `}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/20 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h2"
                className="text-2xl font-medium border-b pb-2 text-white text-center"
              >
                {assignment.courseName}
              </DialogTitle>
              <div>
                <ul className="text-white text-justify my-5">
                  <li>
                    Live Link :{" "}
                    <span className="border-b cursor-pointer">
                      {assignment?.assignment?.liveLink}
                    </span>
                  </li>
                  <li>
                    Code Link :{" "}
                    <span className="border-b cursor-pointer">
                      {assignment?.assignment?.codeLink}
                    </span>
                  </li>
                  {assignment?.assignment?.serverCodeLink ? (
                    <li>
                      Server Code Link :{" "}
                      <span className="border-b cursor-pointer">
                        {assignment?.assignment?.serverCodeLink}
                      </span>
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
              <h1 className="text-4xl font-bold text-white text-center my-5">
                {assignment.mark}/60
              </h1>
              <Description className={"text-white text-center"}>
                Feedback: {assignment?.feedback}
              </Description>
              <div className="mt-3">
                <Button
                  className={
                    "text-white bg-pink-700 w-3/4 mx-auto flex justify-center items-center py-2 rounded-lg"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Okay
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default SeeAssignmentDetailModal;
