import Link from "next/link";
import TextTyping from "./TextTyping";

const HeroSection = () => {
    return (
        <div>
            <header className="hero-section">
                <div className="flex flex-col justify-center items-center text-white text-center min-h-[calc(100vh-104px)]">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold w-3/5">
                        <TextTyping />
                    </h1>
                    <p className="text-xl font-semibold my-4">Learn and teach programming with our interactive platform.</p>
                    <div className="flex gap-3 my-10">
                        <Link href="/signup">
                            <button className=" backdrop-blur-sm rounded-md bg-white/30 hover:bg-white/60 hover:text-gray-900 transition-all duration-300 px-5 py-1 text-2xl">Courses</button>
                        </Link>
                        <Link href="/login">
                            <button className="backdrop-blur-sm rounded-md bg-white/30 hover:bg-white/60 hover:text-gray-900 transition-all duration-300 px-5 py-1 text-2xl">Log In</button>
                        </Link>
                    </div>
                </div>
            </header>
            {/* Other sections go here */}

        </div>
    )
}
export default HeroSection;