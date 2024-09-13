import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

const HandleBecomeAteacher = ({ style, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <button className={style} onClick={() => setIsOpen(true)}>
        Become A Instructor
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 z-10 backdrop-blur-sm bg-black/60" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/20 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-xl md:text-2xl lg:text-3xl font-medium text-white"
              >
                Become A Instructor
              </DialogTitle>
              <p className="text-white my-2">
                If You Want to be an Instructor! You can Send Your
                Qualifications This Email
              </p>
              <ul>
                <li className="text-pink-500 font-semibold">
                  asprogramming@hr.com
                </li>
              </ul>
              <div className="mt-4">
                <Button className="btn text-white py-1 px-4" onClick={close}>
                  Got it, Thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default HandleBecomeAteacher;
