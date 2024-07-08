import Link from "next/link";
import TextTyping from "./TextTyping";


const HeroSection = () => {
    return (
        <div>

            <header className="hero-section">
                <div className="flex flex-col justify-center items-center  text-white text-center min-h-[calc(115vh)]">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:w-3/5 w-full">
                        <TextTyping />
                    </h1>
                    <p className="text-sm md:text-lg font-semibold my-4">Learn and teach programming with our interactive platform.</p>
                    <div className="flex gap-3 my-2">
                        <Link href="/signup">
                            <button className=" btn transition-all duration-300 px-5 py-1">Courses</button>
                        </Link>
                        <Link href="/login">
                            <button className="btn transition-all duration-300 px-5 py-1">Log In</button>
                        </Link>
                    </div>
                </div>
            </header>
            {/* Other sections go here */}

        </div>
    )
}
export default HeroSection;