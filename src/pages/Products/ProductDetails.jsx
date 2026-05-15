import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../../Context/UserContext";
import Loader from "../../Components/Loader";

const ProductDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    // USER CONTEXT
    const { user, loading } = useContext(UserContext);

    // PRODUCT STATE
    const [product, setProduct] = useState(null);

    // QUANTITY
    const [quantity, setQuantity] = useState(1);

    // FETCH PRODUCT
    useEffect(() => {

        // SCROLL TOP
        window.scrollTo(0, 0);

        const fetchProduct = async () => {

            try {

                const res = await axios.get(
                    `https://elitewrist-api.onrender.com/api/v1/products/${id}`
                );

                setProduct(res.data.product);

            }

            catch (error) {

                console.log(error);

            }

        };

        fetchProduct();

    }, [id]);

    // ADD TO CART
    const addToCart = async () => {

        // USER LOADING
        if (loading) {

            alert("Please Wait...");

            return;

        }

        // NOT LOGIN
        if (!user) {

            navigate("/login");

            return;

        }

        try {

            const res = await axios.post(
                "https://elitewrist-api.onrender.com/api/v1/user/cart/add",
                {
                    userId: user.id,
                    productId: product._id,
                    quantity: quantity,
                }
            );

            console.log(res.data);

        

            navigate("/cart");

        }

        catch (error) {

            console.log(error);

        }

    };

    // LOADING
    if (!product) {

        return <Loader />;

    }

    return (

        <div className="bg-black min-h-screen text-white px-6 py-16">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* IMAGE */}
                <div className="bg-[#111] border border-gray-800 rounded-[35px] p-8 flex items-center justify-center">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-w-[500px] object-contain"
                    />

                </div>

                {/* CONTENT */}
                <div>

                    <p className="text-[#D4AF37] uppercase tracking-[6px] text-sm mb-4">

                        Luxury Collection

                    </p>

                    <h1 className="text-5xl font-bold mb-6">

                        {product.name}

                    </h1>

                    <p className="text-gray-400 text-lg leading-8 mb-8">

                        {product.description}

                    </p>

                    <h2 className="text-[#D4AF37] text-5xl font-bold mb-10">

                        ₹{product.price}

                    </h2>

                    {/* BUTTON SECTION */}
                    <div className="flex items-center gap-6">

                        {/* QUANTITY */}
                        <div className="flex items-center bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">

                            <button
                                onClick={() =>
                                    quantity > 1 &&
                                    setQuantity(quantity - 1)
                                }
                                className="px-6 py-4 text-2xl hover:bg-[#1a1a1a]"
                            >
                                -
                            </button>

                            <span className="px-8 text-xl font-semibold">

                                {quantity}

                            </span>

                            <button
                                onClick={() =>
                                    setQuantity(quantity + 1)
                                }
                                className="px-6 py-4 text-2xl hover:bg-[#1a1a1a]"
                            >
                                +
                            </button>

                        </div>

                        {/* ADD TO CART */}
                        <button
                            onClick={addToCart}
                            className="bg-[#D4AF37] text-black px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 duration-300"
                        >

                            Add To Cart

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ProductDetails;