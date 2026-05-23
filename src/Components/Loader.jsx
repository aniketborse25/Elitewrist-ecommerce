const Loader = () => {

    return (

        <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden relative">

            {/* GLOW */}
            <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] bg-[#D4AF37]/10 blur-[100px] md:blur-[140px] rounded-full"></div>

            {/* SPINNER */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 border-[3px] border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin mb-8"></div>

            {/* LOGO */}
            <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-[4px] md:tracking-[6px] text-center">

                <span className="text-[#D4AF37]">

                    ELITE

                </span>

                WRIST

            </h1>

            {/* TEXT */}
            <p className="relative text-gray-500 mt-5 text-[11px] sm:text-sm md:text-base tracking-[2px] md:tracking-[3px] uppercase text-center">

                Loading Luxury Experience...

            </p>

            {/* SMALL LINE */}
            <div className="relative mt-6 w-20 md:w-28 h-[2px] bg-[#D4AF37]/40 rounded-full overflow-hidden">

                <div className="absolute inset-0 bg-[#D4AF37] animate-pulse rounded-full"></div>

            </div>

        </div>

    );

};

export default Loader;