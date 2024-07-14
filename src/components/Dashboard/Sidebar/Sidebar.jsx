"use client";
import { useEffect, useState } from "react";
// Components

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";

import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import StudentMenu from "../Menu/StudentMenu";
import Link from "next/link";
import Logo from "@/components/Shared/Logo";
import MenuItem from "../MenuItem/MenuItem";
import ToggleButton from "@/components/Buttons/ToggleButton";
import TeacherMenu from "../Menu/TeacherMenu";

import { getRole } from "@/api/auth";
import AdminMenu from "../Menu/AdminMenu";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const getRoleFromDb = async () => {
      const role = await getRole(user?.email);
      setRole(role);
    };

    getRoleFromDb();
  }, [user.email]);

  //   For guest/host menu item toggle button
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="  text-gray-100 flex justify-between md:hidden">
        <div>{/* <Logo /> */}</div>

        <button
          onClick={handleToggle}
          className="absolute right-0 top-0 p-4 focus:outline-none "
        >
          <AiOutlineBars className="h-8 w-8" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden backdrop-blur-md bg-white/10 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="shadow-xl shadow-white/10 rounded-xl py-3">
            <Logo className={"w-10 h-10 ml-3"} />
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6 ">
            {/* <MenuItems /> */}

            {/* If a user is a teacher  */}
            {role === "teacher" && (
              <ToggleButton toggleHandler={toggleHandler} />
            )}

            <nav>
              {role === "admin" && <AdminMenu />}
              {role === "user" && (
                <>
                  <StudentMenu />
                  <button>Become a Teacher</button>
                </>
              )}
              {role === "teacher" ? (
                toggle ? (
                  <TeacherMenu />
                ) : (
                  <StudentMenu />
                )
              ) : (
                ""
              )}
              {/* {role === "admin" && <AdminMenu />} */}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label="Profile"
            path="/dashboard/profile"
          />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2  hover:backdrop-blur-sm hover:bg-white/10 text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
