const Brand = () => {

    return (

        <div className="bg-black text-white min-h-screen px-4 md:px-6 py-14 md:py-16">

            <div className="max-w-6xl mx-auto">

                {/* HERO */}
                <div className="text-center mb-20 md:mb-24 px-2">

                    <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[6px] text-[11px] md:text-sm mb-5">

                        About EliteWrist

                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-8">

                        Crafted For

                        <br />

                        <span className="text-[#D4AF37]">

                            Timeless Luxury

                        </span>

                    </h1>

                    <p className="text-gray-500 text-sm md:text-lg leading-7 md:leading-8 max-w-3xl mx-auto">

                        EliteWrist creates premium luxury watches
                        designed for visionaries who appreciate
                        elegance, precision, and modern craftsmanship.

                    </p>

                </div>

                {/* STORY */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20 md:mb-28">

                    {/* IMAGE */}
                    <div className="bg-[#111] border border-[#222] rounded-[24px] md:rounded-[35px] p-5 md:p-8">

                        <img
                            src="/images/hero-watch.png"
                            alt="Luxury Watch"
                            className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] mx-auto object-contain"
                        />

                    </div>

                    {/* CONTENT */}
                    <div className="text-center md:text-left">

                        <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-sm mb-5">

                            Our Story

                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">

                            Precision Meets

                            <span className="text-[#D4AF37]">

                                {" "}Elegance

                            </span>

                        </h2>

                        <p className="text-gray-400 leading-7 md:leading-8 mb-6 text-sm md:text-base">

                            Every EliteWrist timepiece reflects timeless
                            craftsmanship, luxury identity, and modern
                            sophistication. Our watches are designed for
                            individuals who value excellence and ambition.

                        </p>

                        <p className="text-gray-500 leading-7 md:leading-8 text-sm md:text-base">

                            Inspired by iconic luxury brands and modern
                            aesthetics, EliteWrist delivers premium
                            experiences beyond ordinary fashion.

                        </p>

                    </div>

                </div>

                {/* WHAT WE DELIVER */}
                <div className="mb-20 md:mb-28">

                    {/* TITLE */}
                    <div className="text-center mb-12 md:mb-16">

                        <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-sm mb-4">

                            What We Deliver

                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold">

                            Luxury Experience

                        </h2>

                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

                        {/* CARD */}
                        <div className="bg-[#111] border border-[#222] rounded-[24px] md:rounded-[30px] p-6 md:p-8 hover:border-[#D4AF37] duration-300">

                            <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4">

                                Precision

                            </h3>

                            <p className="text-gray-500 leading-7 text-sm md:text-base">

                                Premium craftsmanship with timeless
                                attention to detail and accuracy.

                            </p>

                        </div>

                        {/* CARD */}
                        <div className="bg-[#111] border border-[#222] rounded-[24px] md:rounded-[30px] p-6 md:p-8 hover:border-[#D4AF37] duration-300">

                            <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4">

                                Elegance

                            </h3>

                            <p className="text-gray-500 leading-7 text-sm md:text-base">

                                Sophisticated luxury designs inspired
                                by modern premium aesthetics.

                            </p>

                        </div>

                        {/* CARD */}
                        <div className="bg-[#111] border border-[#222] rounded-[24px] md:rounded-[30px] p-6 md:p-8 hover:border-[#D4AF37] duration-300">

                            <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4">

                                Luxury

                            </h3>

                            <p className="text-gray-500 leading-7 text-sm md:text-base">

                                Crafted for visionaries who value
                                identity, ambition, and class.

                            </p>

                        </div>

                        {/* CARD */}
                        <div className="bg-[#111] border border-[#222] rounded-[24px] md:rounded-[30px] p-6 md:p-8 hover:border-[#D4AF37] duration-300">

                            <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4">

                                Craftsmanship

                            </h3>

                            <p className="text-gray-500 leading-7 text-sm md:text-base">

                                Every watch reflects timeless design
                                and premium luxury experience.

                            </p>

                        </div>

                    </div>

                </div>

                {/* MOTTO */}
                <div className="text-center px-2">

                    <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-sm mb-6">

                        Our Philosophy

                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-5xl mx-auto">

                        Luxury Is Not Just Style.

                        <br />

                        <span className="text-[#D4AF37]">

                            It Is Identity.

                        </span>

                    </h1>

                </div>

            </div>

        </div>

    );

};

export default Brand;