'use client'
import { FaStar, FaBullseye, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
const accordionsData = [
    {
        title: "Build Confidence and Mastering Success",
        content: "Learn strategies to boost your self-confidence, overcome challenges, and achieve your goals with resilience. Develop a positive mindset and gain the confidence to tackle any task or project.",
        icon: <FaStar />,
    },
    {
        title: "Achieving Milestones for Greatness",
        content: "Set ambitious goals and create actionable plans to achieve greatness. Develop strategies for breaking down goals into manageable steps and staying motivated throughout your journey.",
        icon: <FaBullseye />,
    },
    {
        title: "Personalized Course",
        content: "Customize your learning experience with personalized courses tailored to your interests and goals. Choose from a variety of topics and learning paths to suit your learning style and pace.",
        icon: <FaLightbulb />,
    },
    {
        title: "Enhancing Creativity and Innovation",
        content: "Foster creativity and innovative thinking to solve problems and seize opportunities. Explore different brainstorming techniques, design thinking principles, and ways to cultivate a mindset that embraces innovation.",
        icon: <FaCheckCircle />,
    },

];
const Accordion = () => {
    const [accordionOpen, setAccordionOpen] = useState(null);
    const handleToogle = (i) => {
        setAccordionOpen((prevI) => (prevI === i ? null : i));
    };

    return (
        <div className="relative w-full  my-8 shadow-xl  sm:mx-auto sm:max-w-2xl sm:rounded-lg ">
            <div className="mx-auto px-5">

                <div className="mx-auto  divide-y space-y-5 divide-gray-200">
                    {accordionsData?.map((accordion, i) => (
                        <div
                            key={i}
                            className="transition-all duration-200 cursor-pointer backdrop-blur-md bg-white/10"
                        >
                            <button
                                onClick={() => handleToogle(i)}
                                className="w-full flex items-center justify-between font-medium px-6 py-4"
                            >
                                <div className='flex items-center gap-x-2'>
                                    <span className='text-xl md:text-xl text-pink-500'>{accordion.icon}</span>
                                    <span className='text-sm md:text-lg text-left'>{accordion.title}</span>
                                </div>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className={`w-6 h-6  transition-all ease-in-out ${accordionOpen === i
                                        ? "rotate-180 duration-200"
                                        : "rotate-0 duration-200"
                                        }`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`px-6  grid transition-all ease-in-out duration-300 ${accordionOpen === i
                                    ? "grid-rows-[1fr] opacity-100 pb-3"
                                    : "grid-rows-[0fr] opacity-0 p-0"
                                    }`}
                            >
                                <p className="overflow-hidden">
                                    {accordion.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accordion
