import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-black text-white min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center px-10">
                {/* Left Content  */}
                <div>

                    <p className="text-[#D4AF37] uppercase tracking-[5px] mb-4 text-sm">
                        Luxury Collection 2026
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-[95px] mb-6">
                        Timeless <span className="text-[#D4AF37]">Luxury</span>
                        <br />
                        On Your Wrist
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg">
                        Discover premium watches crafted with elegance,
                        precision, and modern luxury for every occasion.
                    </p>

                    {/* Buttons  */}
                    <div className="flex gap-4">

                        <Link
                            to="/shop"
                            className="bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
                        >
                            Shop Now
                        </Link>

                        <button className="border border-gray-600 px-8 py-3 rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-300">
                            Explore More
                        </button>

                    </div>
                </div>

                {/* Right Image  */}
                <div className="relative flex justify-center items-center">

                    {/* Glow */}
                    <div className="absolute w-[700px] h-[700px] bg-yellow-500/10 blur-[160px] rounded-full"></div>

                    {/* Image */}
                    <img
                        src="/images/hero-watch.png"
                        alt="Luxury Watch"
                        className="
                                       relative
                                        w-[680px]
                                      object-cover
                                      rounded-3xl
                                      shadow-2xl
                                      border border-yellow-500/20
                                       hover:rotate-1
                                      transition duration-500"

                    />

                </div>
            </div>
        </section>
    );
};

export default Hero;