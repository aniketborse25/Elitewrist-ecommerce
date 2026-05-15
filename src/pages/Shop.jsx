import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const Shop = () => {

    const [products, setProducts] = useState([]);

    // FETCH PRODUCTS
    const getProducts = async () => {

        try {

            const res = await axios.get(
                "https://elitewrist-api.onrender.com/api/v1/products"
            );

            setProducts(res.data.products);
            console.log("Data:", res.data.products)
            console.log("o id:", res.data.products[0]._id)


        }

        catch (error) {

            console.log(error);

        }
        console.log("o id:", res.data.products[0].id)


    };

    // RUN ONCE
    useEffect(() => {

        getProducts();

    }, []);

    return (

        <div className="bg-black min-h-screen text-white px-6 py-16">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
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

                {/* Products Grid */}
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