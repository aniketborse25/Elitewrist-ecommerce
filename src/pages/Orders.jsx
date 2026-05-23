import { useEffect, useState, useContext } from "react";

import { Navigate } from "react-router-dom";

import axios from "axios";

import UserContext from "../Context/UserContext";

import Loader from "../Components/Loader";

const Orders = () => {

    // USER
    const { user, loading } = useContext(UserContext);

    // ORDERS
    const [orders, setOrders] = useState([]);

    // PAGE LOADING
    const [pageLoading, setPageLoading] = useState(true);

    // FETCH ORDERS
    const fetchOrders = async () => {

        if (!(user?.id || user?._id)) return;

        try {

            const res = await axios.get(
                `https://elitewrist-api.onrender.com/api/v1/user/order/${user?.id || user?._id}`
            );

            setOrders(res.data);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setPageLoading(false);

        }

    };

    // RUN
    useEffect(() => {

        if (user) {

            fetchOrders();

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

    return (

        <div className="bg-black min-h-screen text-white px-4 md:px-6 py-12 md:py-14">

            <div className="max-w-6xl mx-auto">

                {/* TOP */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 md:mb-14">

                    <div className="text-center md:text-left">

                        <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[6px] text-[11px] md:text-sm mb-4">

                            Elite Orders

                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">

                            My Orders

                        </h1>

                        <p className="text-gray-500 text-sm md:text-base">

                            Track your premium purchases and luxury collection.

                        </p>

                    </div>

                    {/* TOTAL */}
                    <div className="bg-[#111] border border-[#222] rounded-[22px] md:rounded-[25px] px-6 md:px-8 py-5 text-center w-full md:w-fit">

                        <h2 className="text-[#D4AF37] text-3xl md:text-4xl font-bold mb-1">

                            {orders.length}

                        </h2>

                        <p className="text-gray-500 text-xs md:text-sm">

                            Total Orders

                        </p>

                    </div>

                </div>

                {/* EMPTY */}
                {orders.length === 0 ? (

                    <div className="text-center py-24 md:py-32">

                        <h2 className="text-2xl md:text-3xl font-bold mb-5">

                            No Orders Yet

                        </h2>

                        <p className="text-gray-500 text-sm md:text-base">

                            Your premium orders will appear here.

                        </p>

                    </div>

                ) : (

                    <div className="space-y-6 md:space-y-8">

                        {orders.map((order) => (

                            <div
                                key={order._id}
                                className="bg-[#111] border border-[#222] rounded-[24px] md:rounded-[35px] p-5 md:p-8 hover:border-[#D4AF37] duration-300"
                            >

                                {/* TOP */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6 md:mb-8">

                                    <div>

                                        <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[3px] md:tracking-[4px] mb-3">

                                            Order Details

                                        </p>

                                        <h2 className="text-xl md:text-2xl font-bold mb-2">

                                            #{order._id.slice(-6)}

                                        </h2>

                                        <p className="text-gray-500 text-xs md:text-sm">

                                            {new Date(order.createdAt).toLocaleDateString()}

                                        </p>

                                    </div>

                                    {/* STATUS */}
                                    <div className="bg-[#D4AF37] text-black px-4 md:px-5 py-2 rounded-full font-bold text-xs md:text-sm w-fit">

                                        {order.orderStatus}

                                    </div>

                                </div>

                                {/* PRODUCTS */}
                                <div className="space-y-4 md:space-y-5">

                                    {order.items.map((item, index) => (

                                        <div
                                            key={index}
                                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 bg-black border border-[#222] rounded-[22px] md:rounded-[25px] p-4 md:p-5"
                                        >

                                            {/* LEFT */}
                                            <div className="flex items-center gap-4 md:gap-5">

                                                {/* IMAGE */}
                                                <div className="bg-[#111] rounded-[16px] md:rounded-[20px] p-2 md:p-3">

                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl"
                                                    />

                                                </div>

                                                {/* INFO */}
                                                <div>

                                                    <h3 className="text-lg md:text-2xl font-bold mb-2">

                                                        {item.name}

                                                    </h3>

                                                    <p className="text-gray-400 text-xs md:text-sm mb-1">

                                                        Quantity : {item.quantity}

                                                    </p>

                                                    <p className="text-gray-500 text-xs md:text-sm">

                                                        ₹{item.price}

                                                    </p>

                                                </div>

                                            </div>

                                            {/* RIGHT */}
                                            <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-bold sm:text-right">

                                                ₹{item.price * item.quantity}

                                            </h2>

                                        </div>

                                    ))}

                                </div>

                                {/* BOTTOM */}
                                <div className="border-t border-[#222] mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">

                                    {/* ADDRESS */}
                                    <div>

                                        <p className="text-gray-500 text-xs md:text-sm mb-3">

                                            Shipping Address

                                        </p>

                                        <h2 className="text-base md:text-lg font-semibold leading-7 md:leading-8">

                                            {order.shippingAddress}

                                        </h2>

                                    </div>

                                    {/* TOTAL */}
                                    <div className="md:text-right">

                                        <p className="text-gray-500 text-xs md:text-sm mb-3">

                                            Total Amount

                                        </p>

                                        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">

                                            ₹{order.totalAmount}

                                        </h2>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

};

export default Orders;