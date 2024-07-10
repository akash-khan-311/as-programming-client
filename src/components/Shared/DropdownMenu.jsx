import { useState } from "react";
import ActiveLink from "./ActiveLink";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
const Dropdown = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-flex lg:hidden  ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden items-center  duration-200 "
        type="button"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </button>
      <div
        className={`absolute overflow-hidden top-5 right-0 transition-[opacity,margin] duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 invisible "
        }   min-w-60 backdrop-blur-md bg-white/10 shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 `}
      >
        <ul className="py-2 first:pt-0 last:pb-0 inline-block space-y-2 ml-5">
          <li className="text-sm">
            {" "}
            <ActiveLink path={"/"}>Home</ActiveLink>
          </li>
          <li className="text-sm">
            {" "}
            <ActiveLink path={"/courses"}>Courses</ActiveLink>
          </li>
          <li className="text-sm">
            <ActiveLink path={"/teach"}>Be a Instructor</ActiveLink>
          </li>
          {!user && (
            <li>
              <Link href="/login">
                <button
                  className="select-none rounded-lg bg-pink-500 py-2 px-12 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
