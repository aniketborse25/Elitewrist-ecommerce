import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-black text-white min-h-screen flex items-center overflow-hidden py-16 md:py-0">

            <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center px-5 md:px-10">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">

                    <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] mb-4 text-[11px] md:text-sm">

                        Luxury Collection 2026

                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight md:leading-[95px] mb-6">

                        Timeless
                        <span className="text-[#D4AF37]">

                            {" "}Luxury

                        </span>

                        <br />

                        On Your Wrist

                    </h1>

                    <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-7">

                        Discover premium watches crafted with elegance,
                        precision, and modern luxury for every occasion.

                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <Link
                            to="/collection"
                            className="bg-[#D4AF37] text-black px-7 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition duration-300 text-sm md:text-base"
                        >

                            Explore Collection

                        </Link>

                        <Link
                            to="/brand"
                            className="border border-gray-600 px-7 py-3 rounded-xl hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-300 text-sm md:text-base"
                        >

                            Discover Brand

                        </Link>

                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center items-center mt-10 md:mt-0">

                    {/* GLOW */}
                    <div className="absolute w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] md:w-[700px] md:h-[700px] bg-yellow-500/10 blur-[100px] md:blur-[160px] rounded-full"></div>

                    {/* IMAGE */}
                    <img
                        src="/images/hero-watch.png"
                        alt="Luxury Watch"
                        className="relative w-[280px] sm:w-[380px] md:w-[680px] object-cover rounded-3xl shadow-2xl border border-yellow-500/20 hover:rotate-1 transition duration-500"
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;