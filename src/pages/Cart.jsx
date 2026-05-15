import { useEffect, useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import axios from "axios";

import UserContext from "../Context/UserContext";
import Loader from "../Components/Loader";

const Cart = () => {

    // USER
    const { user, loading } = useContext(UserContext);

    // NAVIGATE
    const navigate = useNavigate();

    // CART ITEMS
    const [cartItems, setCartItems] = useState([]);

    // PAGE LOADING
    const [pageLoading, setPageLoading] = useState(true);

    // CHECKOUT STATES
    const [shippingAddress, setShippingAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");

    // FETCH CART
    const getCart = async () => {

        // NO USER
        if (!user) return;

        try {

            const res = await axios.get(
                `https://elitewrist-api.onrender.com/api/v1/user/cart/${user.id}`
            );

            setCartItems(res.data.items);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setPageLoading(false);

        }

    };

    // REMOVE ITEM
    const removeItem = async (productId) => {

        try {

            await axios.delete(
                "https://elitewrist-api.onrender.com/api/v1/user/cart/remove",
                {
                    data: {
                        userId: user.id,
                        productId,
                    },
                }
            );

            // REFRESH CART
            getCart();

        }

        catch (error) {

            console.log(error);

        }

    };

    // CHECKOUT
    const handleCheckout = async () => {

        // VALIDATION
        if (!shippingAddress || !phone) {

            alert("Please Fill All Details");

            return;

        }

        try {

            const res = await axios.post(
                "https://elitewrist-api.onrender.com/api/v1/user/order/checkout",
                {
                    userId: user.id,
                    shippingAddress,
                    phone,
                    paymentMethod,
                }
            );

            console.log(res.data);

            alert("Order Placed Successfully 😎🔥");

            // CLEAR CART
            setCartItems([]);

            // REDIRECT
            navigate("/orders");

        }

        catch (error) {

            console.log(error);

        }

    };

    // RUN
    useEffect(() => {

        if (user) {

            getCart();

        }

    }, [user]);

    // USER LOADING
    if (loading) {

        return <Loader />;

    }

    // NOT LOGIN
    if (!user) {

        return <Navigate to="/login" />;

    }

    // PAGE LOADING
    if (pageLoading) {

        return <Loader />;

    }

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

                    {/* LEFT SIDE */}
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

                                    {/* REMOVE BUTTON */}
                                    <button
                                        onClick={() =>
                                            removeItem(item.productId._id)
                                        }
                                        className="mt-4 flex items-center gap-2 text-red-500"
                                    >

                                        <Trash2 size={18} />

                                        Remove

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 h-fit">

                        {/* TITLE */}
                        <h2 className="text-3xl font-bold mb-8">

                            Checkout

                        </h2>

                        {/* ADDRESS */}
                        <input
                            type="text"
                            placeholder="Enter Shipping Address"
                            value={shippingAddress}
                            onChange={(e) =>
                                setShippingAddress(e.target.value)
                            }
                            className="w-full bg-black border border-gray-700 rounded-2xl px-4 py-3 mb-5 outline-none"
                        />

                        {/* PHONE */}
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={(e) =>
                                setPhone(e.target.value)
                            }
                            className="w-full bg-black border border-gray-700 rounded-2xl px-4 py-3 mb-5 outline-none"
                        />

                        {/* PAYMENT */}
                        <select
                            value={paymentMethod}
                            onChange={(e) =>
                                setPaymentMethod(e.target.value)
                            }
                            className="w-full bg-black border border-gray-700 rounded-2xl px-4 py-3 mb-6 outline-none"
                        >

                            <option value="COD">

                                Cash On Delivery

                            </option>

                            <option value="UPI">

                                UPI

                            </option>

                            <option value="CARD">

                                Credit / Debit Card

                            </option>

                        </select>

                        {/* TOTAL */}
                        <div className="flex justify-between text-xl mb-6">

                            <span>Total</span>

                            <span className="text-[#D4AF37] font-bold">

                                ₹{total}

                            </span>

                        </div>

                        {/* CHECKOUT BUTTON */}
                        <button
                            onClick={handleCheckout}
                            className="w-full bg-[#D4AF37] text-black py-4 rounded-2xl font-bold"
                        >

                            Place Order

                        </button>

                    </div>

                </div>

            )}

        </div>

    );

};

export default Cart;