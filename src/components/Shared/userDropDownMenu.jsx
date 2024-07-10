"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

const UserDropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const { logOut, user } = useAuth();
  return (
    <ul className={` ${!user && "hidden"} lg:hidden `}>
      <li
        onClick={() => setOpen(!open)}
        className="relative block p-1 font-sans text-lg antialiased font-medium leading-normal text-blue-gray-900"
      >
        <Image
          className=" rounded-full cursor-pointer"
          src={"/avatar.png"}
          width={30}
          height={30}
          alt="Rounded avatar"
        />

        <div
          className={`${
            open ? "visible opacity-1" : "invisible opacity-0"
          } space-y-10 absolute right-0 top-10 z-50 backdrop-blur-md bg-white/20 rounded-md px-2 w-52 `}
        >
          <ul>
            <li className=" hover:backdrop-blur-md hover:bg-white/10 transition-all  pt-[9px] pb-2 px-3 mt-2">
              <Link
                href="/dashboard"
                className="flex items-center transition-colors "
              >
                <MdDashboard className="text-lg" />{" "}
                <span className="text-sm ml-2">Dashboard</span>
              </Link>
            </li>
            <li className=" hover:bg-red-100 p-1 font-sans text-lg antialiased font-medium  tw-full pt-[9px] pb-2 px-3 text-start leading-tight cursor-pointer select-none transition-all hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10 mb-3">
              <button
                onClick={logOut}
                className="flex gap-x-2 text-red-500 items-center transition-colors "
              >
                <RiLogoutCircleLine className="text-lg" />{" "}
                <span className="text-sm ml-2">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};
export default UserDropDownMenu;
