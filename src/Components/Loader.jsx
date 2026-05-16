const Loader = () => {

    return (

        <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6">

            {/* GLOW */}
            <div className="absolute w-[250px] h-[250px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

            {/* SPINNER */}
            <div className="relative w-20 h-20 border-[3px] border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin mb-8"></div>

            {/* LOGO */}
            <h1 className="relative text-white text-4xl md:text-5xl font-bold tracking-[6px]">

                <span className="text-[#D4AF37]">

                    ELITE

                </span>

                WRIST

            </h1>

            {/* TEXT */}
            <p className="relative text-gray-500 mt-5 text-sm md:text-base tracking-[3px] uppercase text-center">

                Loading Luxury Experience...

            </p>

        </div>

    );

};

export default Loader;