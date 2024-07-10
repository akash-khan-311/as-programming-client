"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";

const HeroSectionButtons = () => {
  const { user } = useAuth();
  return (
    <div className="flex gap-3 my-2">
      <Link href="/courses">
        <button className=" btn  transition-all duration-300 px-5 py-1">
          Courses
        </button>
      </Link>
      {user ? (
        <></>
      ) : (
        <Link href="/login">
          <button className="btn transition-all duration-300 px-5 py-1">
            Log In
          </button>
        </Link>
      )}
    </div>
  );
};
export default HeroSectionButtons;
