import { useEffect, useState, useContext } from "react";

import { useNavigate, Navigate } from "react-router-dom";

import { Trash2 } from "lucide-react";

import axios from "axios";

import UserContext from "../Context/UserContext";

import Loader from "../Components/Loader";

import { loadStripe } from "@stripe/stripe-js";

// STRIPE
const stripePromise = loadStripe(
    "pk_test_51TXvhfIx1MnQ4FgPsdquWHCuc9bs6ATrd6PPdD481RJvYlyCQXKcusrejQQzwuKM0E2JiVtjyWmzgShFfggGagVf00Pzfm45vr"
);

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

    // FETCH CART
    const getCart = async () => {

        if (!(user?.id || user?._id)) return;

        try {

            const res = await axios.get(
                `https://elitewrist-api.onrender.com/api/v1/user/cart/${user?.id || user?._id}`
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
                    userId: user?.id || user?._id,
                    productId,
                    type,
                }
            );

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
                        userId: user?.id || user?._id,
                        productId,
                    },
                }
            );

            getCart();

        }

        catch (error) {

            console.log(error);

        }

    };


    // STRIPE PAYMENT
    const handleStripePayment = async () => {

        if (!shippingAddress || !phone) {

            alert("Please Fill All Details");

            return;

        }

        if (shippingAddress.trim().length < 10) {

            alert("Please enter complete address");
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {

            alert("Enter Valid 10 Digit Phone Number");

            return;

        }

        try {

            const response = await axios.post(

                "https://elitewrist-api.onrender.com/api/v1/payment/create-checkout-session",

                {
                    products: cartItems,
                }

            );
            localStorage.setItem(
                "shippingAddress",
                shippingAddress
            );

            localStorage.setItem(
                "phone",
                phone
            );
            window.location.href = response.data.url;

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

        <div className="bg-black min-h-screen text-white px-4 md:px-6 py-12 md:py-14">

            <div className="max-w-7xl mx-auto">

                {/* TOP */}
                <div className="mb-12 md:mb-14 text-center md:text-left">

                    <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[6px] text-[11px] md:text-sm mb-4">

                        Elite Checkout

                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">

                        Shopping Cart

                    </h1>

                    <p className="text-gray-500 max-w-2xl leading-7 md:leading-8 text-sm md:text-base mx-auto md:mx-0">

                        Review your luxury collection and complete
                        your premium shopping experience.

                    </p>

                </div>

                {/* EMPTY CART */}
                {cartItems.length === 0 ? (

                    <div className="text-center py-24 md:py-32">

                        <h2 className="text-2xl md:text-3xl font-bold mb-5">

                            Your Cart Is Empty

                        </h2>

                        <p className="text-gray-500 text-sm md:text-base">

                            Add premium watches to continue shopping.

                        </p>

                    </div>

                ) : (

                    <div className="grid lg:grid-cols-3 gap-8 md:gap-10">

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-2 space-y-5 md:space-y-6">

                            {cartItems.map((item) => (

                                <div
                                    key={item._id}
                                    className="bg-[#111] border border-[#222] rounded-[24px] md:rounded-[30px] p-4 md:p-5 flex flex-col sm:flex-row items-center gap-5 md:gap-6 hover:border-[#D4AF37] duration-300"
                                >

                                    {/* IMAGE */}
                                    <div className="bg-black rounded-[20px] p-3">

                                        <img
                                            src={item.productId.image}
                                            alt={item.productId.name}
                                            className="w-24 h-24 md:w-28 md:h-28 object-cover"
                                        />

                                    </div>

                                    {/* INFO */}
                                    <div className="flex-1 w-full text-center sm:text-left">

                                        {/* NAME */}
                                        <h2 className="text-xl md:text-2xl font-bold mb-3">

                                            {item.productId.name}

                                        </h2>

                                        {/* QUANTITY */}
                                        <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">

                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.productId._id, "decrease")
                                                }
                                                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#222] text-white hover:bg-[#D4AF37] hover:text-black duration-300"
                                            >

                                                -

                                            </button>

                                            <span className="text-base md:text-lg font-semibold">

                                                {item.quantity}

                                            </span>

                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.productId._id, "increase")
                                                }
                                                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#222] text-white hover:bg-[#D4AF37] hover:text-black duration-300"
                                            >

                                                +

                                            </button>

                                        </div>

                                        {/* PRICE */}
                                        <p className="text-[#D4AF37] text-xl md:text-2xl font-bold">

                                            ₹{item.productId.price * item.quantity}

                                        </p>

                                        {/* REMOVE */}
                                        <button
                                            onClick={() =>
                                                removeItem(item.productId._id)
                                            }
                                            className="mt-5 flex items-center justify-center sm:justify-start gap-2 text-red-500 hover:text-red-400 duration-300 text-sm md:text-base w-full sm:w-auto"
                                        >

                                            <Trash2 size={18} />

                                            Remove

                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="bg-[#111] border border-[#222] rounded-[24px] md:rounded-[30px] p-6 md:p-8 h-fit lg:sticky lg:top-28">

                            {/* TITLE */}
                            <h2 className="text-2xl md:text-3xl font-bold mb-8">

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
                                className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 md:py-4 mb-5 outline-none focus:border-[#D4AF37] text-sm md:text-base"
                            />

                            {/* PHONE */}
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.target.value)
                                }
                                className="w-full bg-black border border-[#333] rounded-xl px-4 py-3 md:py-4 mb-5 outline-none focus:border-[#D4AF37] text-sm md:text-base"
                            />

                            {/* TOTAL */}
                            <div className="flex justify-between items-center mb-8">

                                <span className="text-base md:text-lg text-gray-400">

                                    Total

                                </span>

                                <span className="text-2xl md:text-3xl font-bold text-[#D4AF37]">

                                    ₹{total}

                                </span>

                            </div>

                            {/* PAYMENT BUTTON */}
                            <button
                                onClick={handleStripePayment}
                                className="w-full bg-[#D4AF37] text-black py-3 md:py-4 rounded-xl font-bold hover:scale-[1.02] duration-300 text-sm md:text-base"
                            >

                                Pay Now

                            </button>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

};

export default Cart;