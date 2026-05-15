import { useEffect, useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../Context/UserContext";

const Cart = () => {

    // USER
    const { user, loading } = useContext(UserContext);

    // NAVIGATE
    const navigate = useNavigate();

    // CART STATE
    const [cartItems, setCartItems] = useState([]);

    // PROTECT PAGE
    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }
    // FETCH CART
    const getCart = async () => {

        try {

            const res = await axios.get(
                `https://elitewrist-api.onrender.com/api/v1/user/cart/${user.id}`
            );
            console.log(res.data);
            setCartItems(res.data.items);

        }

        catch (error) {

            console.log(error);

        }

    };

    // RUN ONCE
    useEffect(() => {

        getCart();

    }, []);

    // TOTAL
    let total = 0;

    cartItems.forEach((item) => {

        total += item.productId.price * item.quantity;

    });

    return (

        <div className="bg-black min-h-screen text-white p-10">

            {/* TITLE */}
            <h1 className="text-5xl font-bold mb-10">

                Shopping Cart

            </h1>

            {/* EMPTY CART */}
            {cartItems.length === 0 ? (

                <h2 className="text-2xl text-gray-400">

                    Cart Is Empty

                </h2>

            ) : (

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-5">

                        {cartItems.map((item) => (

                            <div
                                key={item._id}
                                className="bg-[#111] border border-gray-800 rounded-3xl p-5 flex items-center gap-5"
                            >

                                {/* IMAGE */}
                                <img
                                    src={item.productId.image}
                                    alt={item.productId.name}
                                    className="w-32 h-32 object-contain bg-black rounded-2xl"
                                />

                                {/* INFO */}
                                <div className="flex-1">

                                    {/* NAME */}
                                    <h2 className="text-2xl font-bold mb-3">

                                        {item.productId.name}

                                    </h2>

                                    {/* QUANTITY */}
                                    <p className="text-xl font-bold mb-4">

                                        Quantity: {item.quantity}

                                    </p>

                                    {/* PRICE */}
                                    <p className="text-[#D4AF37] text-2xl font-bold">

                                        ₹{item.productId.price * item.quantity}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* RIGHT */}
                    <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 h-fit">

                        <h2 className="text-3xl font-bold mb-8">

                            Order Summary

                        </h2>

                        {/* TOTAL */}
                        <div className="flex justify-between text-xl mb-6">

                            <span>Total</span>

                            <span className="text-[#D4AF37] font-bold">

                                ₹{total}

                            </span>

                        </div>

                        {/* CHECKOUT */}
                        <button
                            onClick={() => navigate("/checkout")}
                            className="w-full bg-[#D4AF37] text-black py-4 rounded-2xl font-bold"
                        >

                            Checkout

                        </button>

                    </div>

                </div>

            )}

        </div>

    );

};

export default Cart;