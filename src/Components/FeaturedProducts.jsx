import { useEffect, useState } from "react";

import axios from "axios";

import ProductCard from "./ProductCard";

import Loader from "./Loader";

const FeaturedProducts = () => {

    // PRODUCTS
    const [products, setProducts] = useState([]);

    // LOADING
    const [loading, setLoading] = useState(true);

    // FETCH PRODUCTS
    const getProducts = async () => {

        try {

            const res = await axios.get(
                "https://elitewrist-api.onrender.com/api/v1/products"
            );

            setProducts(res.data.products);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    // RUN ONCE
    useEffect(() => {

        getProducts();

    }, []);

    // LOADER
    if (loading) {

        return <Loader />;

    }

    return (

        <section className="bg-black text-white py-16 md:py-20 px-4 md:px-8">

            {/* HEADING */}
            <div className="text-center mb-12 md:mb-14">

                <p className="text-[#D4AF37] tracking-[4px] md:tracking-[5px] uppercase text-[11px] md:text-sm mb-4">

                    Elite Collection

                </p>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-5 leading-tight">

                    Featured Watches

                </h2>

                <p className="text-gray-500 max-w-2xl mx-auto leading-7 md:leading-8 text-sm md:text-base px-2">

                    Crafted with timeless elegance and precision
                    for those who value luxury and sophistication.

                </p>

            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">

                {products.slice(0, 6).map((product) => (

                    <ProductCard
                        key={product._id}
                        product={product}
                    />

                ))}

            </div>

            {/* ABOUT */}
            <div className="mt-20 md:mt-24 text-center max-w-4xl mx-auto px-2">

                <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-sm mb-5">

                    About EliteWrist

                </p>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6">

                    Crafted For

                    <span className="text-[#D4AF37]">

                        {" "}Timeless Luxury

                    </span>

                </h2>

                <p className="text-gray-400 leading-7 md:leading-8 text-sm md:text-lg mb-8">

                    EliteWrist creates premium luxury watches designed
                    for visionaries who appreciate elegance, precision,
                    and modern craftsmanship.

                </p>

                <button className="bg-[#D4AF37] text-black px-7 md:px-8 py-3 md:py-4 rounded-2xl font-semibold hover:scale-105 duration-300 text-sm md:text-base">

                    Discover Brand

                </button>

            </div>

            {/* WHAT WE DELIVER */}
            <div className="mt-20 md:mt-24">

                {/* TITLE */}
                <div className="text-center mb-12 md:mb-14">

                    <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-sm mb-4">

                        What We Deliver

                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">

                        Luxury Experience

                    </h2>

                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

                    {/* CARD 1 */}
                    <div className="bg-[#111] border border-[#222] rounded-[25px] p-6 md:p-8 min-h-[180px] md:min-h-[220px] flex flex-col justify-center hover:border-[#D4AF37] duration-300">

                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#D4AF37]">

                            Swiss Precision

                        </h3>

                        <p className="text-gray-500 leading-7 text-sm md:text-base">

                            Crafted with premium engineering
                            for timeless performance and elegance.

                        </p>

                    </div>

                    {/* CARD 2 */}
                    <div className="bg-[#111] border border-[#222] rounded-[25px] p-6 md:p-8 min-h-[180px] md:min-h-[220px] flex flex-col justify-center hover:border-[#D4AF37] duration-300">

                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#D4AF37]">

                            Premium Materials

                        </h3>

                        <p className="text-gray-500 leading-7 text-sm md:text-base">

                            Designed using luxury-grade metals,
                            sapphire glass, and elegant finishes.

                        </p>

                    </div>

                    {/* CARD 3 */}
                    <div className="bg-[#111] border border-[#222] rounded-[25px] p-6 md:p-8 min-h-[180px] md:min-h-[220px] flex flex-col justify-center hover:border-[#D4AF37] duration-300">

                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#D4AF37]">

                            Global Shipping

                        </h3>

                        <p className="text-gray-500 leading-7 text-sm md:text-base">

                            Fast and secure worldwide delivery
                            with premium packaging experience.

                        </p>

                    </div>

                    {/* CARD 4 */}
                    <div className="bg-[#111] border border-[#222] rounded-[25px] p-6 md:p-8 min-h-[180px] md:min-h-[220px] flex flex-col justify-center hover:border-[#D4AF37] duration-300">

                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#D4AF37]">

                            24/7 Support

                        </h3>

                        <p className="text-gray-500 leading-7 text-sm md:text-base">

                            Dedicated luxury support team
                            available anytime for assistance.

                        </p>

                    </div>

                </div>

            </div>

            {/* MOTTO */}
            <div className="mt-20 md:mt-24 text-center px-2">

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

        </section>

    );

};

export default FeaturedProducts;