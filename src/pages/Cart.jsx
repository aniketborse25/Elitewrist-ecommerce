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

    // UPDATE QUANTITY
    const updateQuantity = async (productId, type) => {

        try {

            await axios.put(
                "https://elitewrist-api.onrender.com/api/v1/user/cart/update",
                {
                    userId: user.id,
                    productId,
                    type,
                }
            );

            // REFRESH CART
            getCart();

        }

        catch (error) {

            console.log(error);

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

        // EMPTY VALIDATION
        if (!shippingAddress || !phone) {

            alert("Please Fill All Details");

            return;

        }

        // PHONE VALIDATION
        if (phone.length !== 10 || isNaN(phone)) {

            alert("Enter Valid 10 Digit Phone Number");

            return;

        }

        // ADDRESS VALIDATION
        if (shippingAddress.length < 15) {

            alert("Enter Full Shipping Address");

            return;

        }

        try {

            await axios.post(
                "https://elitewrist-api.onrender.com/api/v1/user/order/checkout",
                {
                    userId: user.id,
                    shippingAddress,
                    phone,
                    paymentMethod,
                }
            );

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

        <div className="bg-black min-h-screen text-white px-6 py-14 md:px-10">

            <div className="max-w-7xl mx-auto">

                {/* TOP */}
                <div className="mb-14">

                    <p className="text-[#D4AF37] uppercase tracking-[6px] text-sm mb-4">

                        Elite Checkout

                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-5">

                        Shopping Cart

                    </h1>

                    <p className="text-gray-500 max-w-2xl leading-8">

                        Review your luxury collection and complete
                        your premium shopping experience.

                    </p>

                </div>

                {/* EMPTY CART */}
                {cartItems.length === 0 ? (

                    <div className="text-center py-32">

                        <h2 className="text-3xl font-bold mb-5">

                            Your Cart Is Empty

                        </h2>

                        <p className="text-gray-500">

                            Add premium watches to continue shopping.

                        </p>

                    </div>

                ) : (

                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-2 space-y-6">

                            {cartItems.map((item) => (

                                <div
                                    key={item._id}
                                    className="bg-[#111] border border-[#222] rounded-[30px] p-5 flex flex-col sm:flex-row items-center gap-6 hover:border-[#D4AF37] duration-300"
                                >

                                    {/* IMAGE */}
                                    <div className="bg-black rounded-[25px] p-4">

                                        <img
                                            src={item.productId.image}
                                            alt={item.productId.name}
                                            className="w-28 h-28 object-cover"
                                        />

                                    </div>

                                    {/* INFO */}
                                    <div className="flex-1 w-full">

                                        {/* NAME */}
                                        <h2 className="text-2xl font-bold mb-3">

                                            {item.productId.name}

                                        </h2>

                                        {/* QUANTITY CONTROLS */}
                                        <div className="flex items-center gap-4 mb-4">

                                            {/* DECREASE */}
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.productId._id, "decrease")
                                                }
                                                className="w-9 h-9 rounded-full bg-[#222] text-white hover:bg-[#D4AF37] hover:text-black duration-300"
                                            >

                                                -

                                            </button>

                                            {/* QUANTITY */}
                                            <span className="text-lg font-semibold">

                                                {item.quantity}

                                            </span>

                                            {/* INCREASE */}
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.productId._id, "increase")
                                                }
                                                className="w-9 h-9 rounded-full bg-[#222] text-white hover:bg-[#D4AF37] hover:text-black duration-300"
                                            >

                                                +

                                            </button>

                                        </div>

                                        {/* PRICE */}
                                        <p className="text-[#D4AF37] text-2xl font-bold">

                                            ₹{item.productId.price * item.quantity}

                                        </p>

                                        {/* REMOVE */}
                                        <button
                                            onClick={() =>
                                                removeItem(item.productId._id)
                                            }
                                            className="mt-5 flex items-center gap-2 text-red-500 hover:text-red-400 duration-300"
                                        >

                                            <Trash2 size={18} />

                                            Remove

                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="bg-[#111] border border-[#222] rounded-[30px] p-8 h-fit sticky top-28">

                            {/* TITLE */}
                            <h2 className="text-3xl font-bold mb-8">

                                Checkout

                            </h2>

                            {/* ADDRESS */}
                            <input
                                type="text"
                                placeholder="Shipping Address"
                                value={shippingAddress}
                                onChange={(e) =>
                                    setShippingAddress(e.target.value)
                                }
                                className="w-full bg-black border border-[#333] rounded-xl px-4 py-4 mb-5 outline-none focus:border-[#D4AF37]"
                            />

                            {/* PHONE */}
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.target.value)
                                }
                                minLength={10}
                                maxLength={10}
                                className="w-full bg-black border border-[#333] rounded-xl px-4 py-4 mb-5 outline-none focus:border-[#D4AF37]"
                            />

                            {/* PAYMENT */}
                            <select
                                value={paymentMethod}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                                className="w-full bg-black border border-[#333] rounded-xl px-4 py-4 mb-6 outline-none focus:border-[#D4AF37]"
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
                            <div className="flex justify-between items-center mb-8">

                                <span className="text-lg text-gray-400">

                                    Total

                                </span>

                                <span className="text-3xl font-bold text-[#D4AF37]">

                                    ₹{total}

                                </span>

                            </div>

                            {/* BUTTON */}
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold hover:scale-[1.02] duration-300"
                            >

                                Place Order

                            </button>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

};

export default Cart;