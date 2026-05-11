import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {

    // Store products
    const [products, setProducts] = useState([]);

    // Fetch products
    const getProducts = async () => {

        try {

            const res = await axios.get(
                "http://localhost:3000/products"
            );

            setProducts(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    // Run once
    useEffect(() => {

        getProducts();

    }, []);

    return (

        <section className="bg-black text-white py-24 px-10">

            {/* Heading */}
            <div className="text-center mb-16">

                <p className="text-[#D4AF37] tracking-[5px] uppercase text-sm mb-4">
                    Premium Collection
                </p>

                <h2 className="text-5xl font-bold mb-4">
                    Featured Watches
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore our luxury collection crafted for elegance,
                    precision, and timeless style.
                </p>

            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {products.slice(0, 6).map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );
};

export default FeaturedProducts;