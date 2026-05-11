import { useEffect, useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../Context/UserContext";

const Cart = () => {

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);

    // PROTECT PAGE
    if (!user) {
        return <Navigate to="/login" />;
    }

    // FETCH CART
    const getCart = async () => {

        const res = await axios.get(
            "http://localhost:3000/cart"
        );

        setCartItems(res.data);

    };

    useEffect(() => {
        getCart();
    }, []);

    // DELETE
    const deleteItem = async (id) => {

        await axios.delete(
            `http://localhost:3000/cart/${id}`
        );

        getCart();

    };

    // INCREASE
    const increase = async (item) => {

        item.quantity++;

        await axios.put(

            `http://localhost:3000/cart/${item.id}`,

            item

        );

        getCart();

    };
    const decrease = async (item) => {

        if (item.quantity <= 1) return;

        item.quantity--;

        await axios.put(

            `http://localhost:3000/cart/${item.id}`,

            item

        );

        getCart();

    };

    // TOTAL
    const total = cartItems.reduce(

        (sum, item) =>

            sum + item.price * item.quantity,

        0

    );

    return (

        <div className="bg-black min-h-screen text-white p-10">

            <h1 className="text-5xl font-bold mb-10">

                Cart

            </h1>

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
                                key={item.id}
                                className="bg-[#111] border border-gray-800 rounded-3xl p-5 flex items-center gap-5"
                            >

                                {/* IMAGE */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-32 h-32 object-contain bg-black rounded-2xl"
                                />

                                {/* INFO */}
                                <div className="flex-1">

                                    <h2 className="text-2xl font-bold mb-3">

                                        {item.name}

                                    </h2>

                                    {/* QUANTITY */}
                                    <div className="flex items-center gap-4 mb-4">

                                        <button
                                            onClick={() => decrease(item)}
                                            className="bg-[#222] w-10 h-10 rounded-xl"
                                        >
                                            -
                                        </button>

                                        <span className="text-xl">

                                            {item.quantity}

                                        </span>

                                        <button
                                            onClick={() => increase(item)}
                                            className="bg-[#222] w-10 h-10 rounded-xl"
                                        >
                                            +
                                        </button>

                                    </div>

                                    {/* PRICE */}
                                    <p className="text-[#D4AF37] text-2xl font-bold">

                                        ₹{item.price * item.quantity}

                                    </p>

                                </div>

                                {/* DELETE */}
                                <button
                                    onClick={() => deleteItem(item.id)}
                                    className="bg-red-500 px-5 py-3 rounded-xl"
                                >

                                    Remove

                                </button>

                            </div>

                        ))}

                    </div>

                    {/* RIGHT */}
                    <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 h-fit">

                        <h2 className="text-3xl font-bold mb-8">

                            Summary

                        </h2>

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