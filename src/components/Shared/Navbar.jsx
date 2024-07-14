"use client";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import useAuth from "@/hooks/useAuth";
import Dropdown from "./DropdownMenu";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import UserDropDownMenu from "./userDropDownMenu";
import { FaBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [header, setHeader] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  const scrollHandler = () => {
    if (window.scrollY > 1) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.addEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <nav
      className={`${
        header && " w-full backdrop-blur-2xl border-b bg-black/50  `"
      } ${
        isDashboard ? "hidden " : ""
      } transition-all durration-500 z-[999] block w-full py-2 mx-auto text-white fixed top-0 `}
    >
      <Container>
        <nav className="flex items-center justify-between  w-full">
          <Logo className="w-10 h-10 py-2 " />

          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-lg antialiased font-medium leading-normal text-blue-gray-900">
                <ActiveLink path="/">Home</ActiveLink>
              </li>
              <li className="block p-1 font-sans text-lg antialiased font-medium leading-normal text-blue-gray-900">
                <ActiveLink path="/courses">Courses</ActiveLink>
              </li>

              {user ? (
                <li
                  onClick={() => setOpen(!open)}
                  className="relative block p-1 font-sans text-lg antialiased font-medium leading-normal text-blue-gray-900"
                >
                  <Image
                    className=" rounded-full cursor-pointer"
                    src={user.photoURL ? user.photoURL : "/avatar.png"}
                    width={30}
                    height={30}
                    alt="Rounded avatar"
                  />

                  <div
                    className={`${
                      open ? "visible opacity-1" : "invisible opacity-0"
                    } space-y-10 absolute right-0 top-10 z-50 backdrop-blur-md bg-white rounded-md px-2 w-52 `}
                  >
                    <ul>
                      <Link
                        href="/dashboard"
                        className="flex items-center transition-colors "
                      >
                        <li className="flex items-center w-full text-gray-500 hover:bg-gray-200 hover:text-black transition-all  pt-[9px] pb-2 px-3 mt-2">
                          <MdDashboard className="text-lg" />
                          <span className="text-lg ml-2">Dashboard</span>
                        </li>
                      </Link>
                      <Link
                        href="/dashboard/bookmarks"
                        className=" flex items-center transition-colors"
                      >
                        <li className=" text-gray-500 hover:bg-gray-200 hover:text-black transition-all  pt-[9px] pb-2 px-3 mt-2 flex items-center w-full">
                          <FaBookmark className="text-lg" />
                          <span className="text-lg ml-2">Bookmarks</span>
                        </li>
                      </Link>
                      <Link
                        href="/dashboard/profile"
                        className=" flex items-center transition-colors"
                      >
                        <li className=" text-gray-500 hover:bg-gray-200 hover:text-black transition-all  pt-[9px] pb-2 px-3 mt-2 flex items-center w-full">
                          <CgProfile className="text-lg" />
                          <span className="text-lg ml-2">Profile</span>
                        </li>
                      </Link>
                      <button
                        onClick={logOut}
                        className="text-gray-500 hover:bg-red-200 hover:text-black transition-all  pt-[9px] pb-2 px-3 mt-2 flex items-center  w-full mb-3"
                      >
                        <RiLogoutCircleLine className="text-lg" />
                        <span className="text-lg ml-2 ">Logout</span>
                      </button>
                    </ul>
                  </div>
                </li>
              ) : (
                <li>
                  <Link href="/login">
                    <button
                      className="select-none rounded-lg bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:hidden flex items-center">
            <Dropdown />
            <UserDropDownMenu />
          </div>
        </nav>
      </Container>
    </nav>
  );
};
export default Navbar;
