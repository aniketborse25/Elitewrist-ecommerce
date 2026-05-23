import { useEffect, useState } from "react";

import axios from "axios";

import ProductCard from "../Components/ProductCard";

import Loader from "../Components/Loader";

const Collection = () => {

    // PRODUCTS
    const [products, setProducts] = useState([]);

    // FILTERED PRODUCTS
    const [filteredProducts, setFilteredProducts] = useState([]);

    // ACTIVE CATEGORY
    const [activeCategory, setActiveCategory] = useState("All");

    // LOADING
    const [loading, setLoading] = useState(true);

    // FETCH PRODUCTS
    const getProducts = async () => {

        try {

            const res = await axios.get(
                "https://elitewrist-api.onrender.com/api/v1/products"
            );

            setProducts(res.data.products);

            setFilteredProducts(res.data.products);

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

    // FILTER CATEGORY
    const filterCategory = (category) => {

        // ACTIVE BUTTON
        setActiveCategory(category);

        // ALL PRODUCTS
        if (category === "All") {

            setFilteredProducts(products);

            return;

        }

        // FILTER PRODUCTS
        const filtered = products.filter(

            (product) => product.category === category

        );

        setFilteredProducts(filtered);

    };

    // LOADER
    if (loading) {

        return <Loader />;

    }

    return (

        <div className="bg-black min-h-screen text-white px-4 md:px-6 py-14 md:py-16">

            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="mb-14 md:mb-16 text-center px-2">

                    <p className="text-[#D4AF37] tracking-[4px] md:tracking-[8px] uppercase mb-5 text-[11px] md:text-sm">

                        Elite Collection

                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">

                        Timeless Luxury

                        <br />

                        Crafted For Visionaries

                    </h1>

                    <p className="text-gray-500 text-sm md:text-lg leading-7 md:leading-8 max-w-3xl mx-auto">

                        Explore our premium collection of luxury watches
                        crafted with elegance, precision, and timeless design.

                    </p>

                </div>

                {/* CATEGORY BUTTONS */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14 md:mb-16">

                    {/* ALL */}
                    <button
                        onClick={() => filterCategory("All")}
                        className={`px-5 md:px-6 py-2.5 md:py-3 rounded-2xl border duration-300 text-sm md:text-base ${activeCategory === "All"
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                            : "border-[#333] hover:border-[#D4AF37]"
                            }`}
                    >

                        All

                    </button>

                    {/* CLASSIC */}
                    <button
                        onClick={() => filterCategory("Classic")}
                        className={`px-5 md:px-6 py-2.5 md:py-3 rounded-2xl border duration-300 text-sm md:text-base ${activeCategory === "Classic"
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                            : "border-[#333] hover:border-[#D4AF37]"
                            }`}
                    >

                        Classic

                    </button>

                    {/* SPORT */}
                    <button
                        onClick={() => filterCategory("Sport")}
                        className={`px-5 md:px-6 py-2.5 md:py-3 rounded-2xl border duration-300 text-sm md:text-base ${activeCategory === "Sport"
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                            : "border-[#333] hover:border-[#D4AF37]"
                            }`}
                    >

                        Sport

                    </button>

                    {/* LUXURY */}
                    <button
                        onClick={() => filterCategory("Luxury")}
                        className={`px-5 md:px-6 py-2.5 md:py-3 rounded-2xl border duration-300 text-sm md:text-base ${activeCategory === "Luxury"
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                            : "border-[#333] hover:border-[#D4AF37]"
                            }`}
                    >

                        Luxury

                    </button>

                    {/* MODERN */}
                    <button
                        onClick={() => filterCategory("Modern")}
                        className={`px-5 md:px-6 py-2.5 md:py-3 rounded-2xl border duration-300 text-sm md:text-base ${activeCategory === "Modern"
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                            : "border-[#333] hover:border-[#D4AF37]"
                            }`}
                    >

                        Modern

                    </button>

                </div>

                {/* PRODUCTS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">

                    {filteredProducts.map((product) => (

                        <ProductCard
                            key={product._id}
                            product={product}
                        />

                    ))}

                </div>

            </div>

        </div>

    );

};

export default Collection;