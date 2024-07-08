"use client";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    console.log(open)

    return (
        <nav className=" fixed top-0 z-50 block w-full py-4 mx-auto text-white  border-b shadow-md border-white/80  backdrop-blur-2xl backdrop-saturate-200">
            <Container>
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link href="/" className="cursor-pointer py-1.5 font-sans flex items-center text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                        <Image src={'/logo.png'} width={50} height={50} alt="AS Logo" /> <span className="ml-2 text-3xl">Programming</span>
                    </Link>
                    <div className="hidden lg:block">
                        <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="block p-1 font-sans text-lg antialiased font-medium leading-normal text-blue-gray-900">
                                <ActiveLink path="/">Home</ActiveLink>
                            </li>
                            <li className="block p-1 font-sans text-lg antialiased font-medium leading-normal text-blue-gray-900">
                                <ActiveLink path="/courses">Courses</ActiveLink>
                            </li>
                            <li className="block p-1 font-sans text-lg antialiased font-medium leading-normal text-blue-gray-900">
                                <ActiveLink path="/teach">Be a Instructor</ActiveLink>

                            </li>
                            <li onClick={() => setOpen(!open)} className="relative block p-1 font-sans text-lg antialiased font-medium leading-normal text-blue-gray-900">

                                <Image className=" rounded-full cursor-pointer" src={'/avatar.png'} width={30} height={30} alt="Rounded avatar" />

                                <div className={`${open ? "visible opacity-1" : 'invisible opacity-0'} space-y-10 absolute right-0 top-10 z-50 bg-white rounded-md px-2 w-52 `}>
                                    <ul>

                                        <li className=" text-gray-500 hover:bg-gray-200 hover:text-black transition-all  pt-[9px] pb-2 px-3 mt-2">
                                            <Link href="/dashboard" className="flex items-center transition-colors ">
                                                <MdDashboard className="text-lg" /> <span className="text-lg ml-2">Dashboard</span>
                                            </Link>
                                        </li>
                                        <li className=" hover:bg-red-100 p-1 font-sans text-lg antialiased font-medium  tw-full pt-[9px] pb-2 px-3 text-start leading-tight cursor-pointer select-none transition-all hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10 mb-3">
                                            <button className="flex gap-x-2 text-red-500 items-center transition-colors ">
                                                <RiLogoutCircleLine className="text-lg" /> <span className="text-lg ml-2">Logout</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </span>
                    </button>
                </div>
            </Container>
        </nav >

    )
}
export default Navbar;