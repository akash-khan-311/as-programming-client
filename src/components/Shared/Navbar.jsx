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
import { FaCartShopping } from "react-icons/fa6";
import { useQuery } from "react-query";
import { getBookmarksForStudent, getUserCartItems } from "@/api/courses";
import Loader from "./Loader";
import useRole from "@/hooks/useRole";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [header, setHeader] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [role] = useRole();
  const isDashboard = pathname.startsWith("/dashboard");

  // Fetch cart items count using React Query
  const { data: cartItems } = useQuery(
    ["cartItems", user?.email],
    async () => await getUserCartItems(user?.email),
    {
      enabled: !!user?.email, // Only fetch if user email is available
    }
  );

  // Fetch Bookmark Items using react query
  const { data: bookmarkItems } = useQuery(
    ["bookmarksItems", user?.email],
    async () => await getBookmarksForStudent(user?.email),
    {
      enabled: !!user?.email, // Only fetch if user email is available
    }
  );

  // Calculate cart items count and bookmark items count
  const cartItemCount = cartItems?.length || 0;
  const bookmarkItemCount = bookmarkItems?.length || 0;
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
        header && " w-full backdrop-blur-2xl border-b bg-black/50 "
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
                  className="relative block rounded-full cursor-pointer p-1 font-sans text-lg antialiased font-medium leading-normal text-blue-gray-900"
                >
                  <Image
                    className="rounded-full h-10 w-10"
                    src={user.photoURL ? user.photoURL : "/avatar.png"}
                    width={40}
                    height={40}
                    alt="Rounded avatar"
                  />

                  <div
                    className={`${
                      open ? "visible opacity-1 " : "invisible opacity-0 "
                    } space-y-10 absolute right-0 top-16 z-50 backdrop-blur-md bg-white/20 rounded-md px-2 w-52 shadow-xl`}
                  >
                    <ul>
                      <Link
                        href="/dashboard"
                        className="flex items-center transition-colors "
                      >
                        <li className="flex items-center w-full text-gray-100 hover:backdrop-blur-sm hover:bg-white/30 hover:text-black transition-all rounded-md  pt-[9px] pb-2 px-3 mt-2">
                          <MdDashboard className="text-sm" />
                          <span className="text-sm ml-2">Dashboard</span>
                        </li>
                      </Link>
                      {role === "student" && (
                        <Link
                          href="/bookmarks"
                          className=" flex items-center justify-between transition-colors"
                        >
                          <li className=" text-gray-100 hover:backdrop-blur-sm hover:bg-white/30  hover:text-black transition-all rounded-md  pt-[9px] pb-2 px-3 mt-2 flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <FaCartShopping className="text-sm" />
                              <span className="text-sm ml-2">Bookmarks</span>
                            </div>
                            <span className="text-black backdrop-blur-lg bg-white/60 text-sm p-1 rounded-full w-6 h-6 flex items-center justify-center">
                              {bookmarkItemCount}
                            </span>
                          </li>
                        </Link>
                      )}
                      {role === "student" && (
                        <Link
                          href="/cart"
                          className=" flex items-center justify-between transition-colors"
                        >
                          <li className=" text-gray-100 hover:backdrop-blur-sm hover:bg-white/30  hover:text-black transition-all rounded-md  pt-[9px] pb-2 px-3 mt-2 flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <FaCartShopping className="text-sm" />
                              <span className="text-sm ml-2">Cart</span>
                            </div>
                            <span className="text-black backdrop-blur-lg bg-white/60 text-sm p-1 rounded-full w-6 h-6 flex items-center justify-center">
                              {cartItemCount}
                            </span>
                          </li>
                        </Link>
                      )}
                      <Link
                        href="/dashboard/profile"
                        className=" flex items-center transition-colors"
                      >
                        <li className=" text-gray-100 hover:backdrop-blur-sm hover:bg-white/30  hover:text-black transition-all rounded-md  pt-[9px] pb-2 px-3 mt-2 flex items-center w-full">
                          <CgProfile className="text-sm" />
                          <span className="text-sm ml-2">Profile</span>
                        </li>
                      </Link>
                      <button
                        onClick={logOut}
                        className="text-gray-100 hover:bg-red-400 hover:text-black transition-all rounded-md  pt-[9px] pb-2 px-3 mt-2 flex items-center  w-full mb-3"
                      >
                        <RiLogoutCircleLine className="text-sm" />
                        <span className="text-sm ml-2 ">Logout</span>
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
