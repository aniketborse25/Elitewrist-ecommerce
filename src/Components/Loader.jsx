const Loader = () => {

    return (

        <div className="bg-black min-h-screen flex flex-col items-center justify-center">

            {/* SPINNER */}
            <div className="w-20 h-20 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mb-8"></div>

            {/* TEXT */}
            <h1 className="text-white text-3xl font-bold tracking-[4px]">

                ELITEWRIST

            </h1>

            <p className="text-gray-400 mt-4 text-lg">

                Loading Luxury Experience...

            </p>

        </div>

    );

};

export default Loader;