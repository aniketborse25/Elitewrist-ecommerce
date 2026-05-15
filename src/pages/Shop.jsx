import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import Loader from "../Components/Loader";

const Shop = () => {

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

        <div className="bg-black min-h-screen text-white px-6 py-16">

            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="mb-16 text-center">

                    <p className="text-[#D4AF37] tracking-[8px] uppercase mb-4">

                        Premium Collection

                    </p>

                    <h1 className="text-6xl font-bold mb-6">

                        Luxury Watches

                    </h1>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">

                        Explore our premium collection of luxury watches crafted with elegance, precision, and timeless design.

                    </p>

                </div>

                {/* PRODUCTS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {products.map((product) => (

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

export default Shop;