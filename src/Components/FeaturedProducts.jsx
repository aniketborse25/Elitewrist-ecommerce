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

        <section className="bg-black text-white py-24 px-10">

            {/* HEADING */}
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

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {products.slice(0, 6).map((product) => (

                    <ProductCard
                        key={product._id}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );

};

export default FeaturedProducts;