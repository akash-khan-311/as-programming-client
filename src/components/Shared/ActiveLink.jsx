"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ path, children }) => {
  const pathname = usePathname();

  const isActive = pathname === path;
  return (
    <Link
      className={`${
        isActive && "text-pink-500 after:w-full"
      } inline-block after:contents[""] after:block after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 after:hover:w-full  transition-colors hover:text-pink-500`}
      href={path}
    >
      {children}
    </Link>
  );
};
export default ActiveLink;
