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

        try {

            const res = await axios.get(
                `https://elitewrist-api.onrender.com/api/v1/user/order/${user.id}`
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

        <div className="bg-black min-h-screen text-white px-6 py-14">

            <div className="max-w-5xl mx-auto">

                {/* TOP */}
                <div className="flex items-center justify-between mb-12">

                    <div>

                        <h1 className="text-5xl font-bold mb-2">

                            My Orders

                        </h1>

                        <p className="text-gray-400">

                            Track all your purchases

                        </p>

                    </div>

                    <div className="bg-[#111] border border-gray-800 rounded-2xl px-6 py-4">

                        <h2 className="text-[#D4AF37] text-3xl font-bold">

                            {orders.length}

                        </h2>

                        <p className="text-gray-400 text-sm">

                            Orders

                        </p>

                    </div>

                </div>

                {/* EMPTY */}
                {orders.length === 0 ? (

                    <div className="text-center text-2xl text-gray-500 mt-32">

                        No Orders Yet

                    </div>

                ) : (

                    <div className="space-y-8">

                        {orders.map((order) => (

                            <div
                                key={order._id}
                                className="bg-[#111] border border-gray-800 rounded-3xl p-8"
                            >

                                {/* TOP */}
                                <div className="flex items-center justify-between mb-8">

                                    <div>

                                        <p className="text-gray-500 text-sm uppercase tracking-[3px] mb-3">

                                            Order Details

                                        </p>

                                        <h2 className="text-2xl font-bold mb-2">

                                            #{order._id.slice(-6)}

                                        </h2>

                                        <p className="text-gray-400">

                                            {new Date(order.createdAt).toLocaleDateString()}

                                        </p>

                                    </div>

                                    {/* STATUS */}
                                    <div className="bg-[#D4AF37] text-black px-5 py-2 rounded-full font-bold">

                                        {order.orderStatus}

                                    </div>

                                </div>

                                {/* PRODUCTS */}
                                <div className="space-y-5">

                                    {order.items.map((item, index) => (

                                        <div
                                            key={index}
                                            className="flex items-center justify-between bg-black border border-gray-800 rounded-2xl p-5"
                                        >

                                            {/* LEFT */}
                                            <div className="flex items-center gap-5">

                                                {/* IMAGE */}
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-24 h-24 object-cover rounded-2xl bg-[#111]"
                                                />

                                                {/* INFO */}
                                                <div>

                                                    <h3 className="text-2xl font-bold mb-2">

                                                        {item.name}

                                                    </h3>

                                                    <p className="text-gray-400">

                                                        Quantity: {item.quantity}

                                                    </p>

                                                    <p className="text-gray-500 mt-1">

                                                        ₹{item.price}

                                                    </p>

                                                </div>

                                            </div>

                                            {/* RIGHT */}
                                            <h2 className="text-[#D4AF37] text-3xl font-bold">

                                                ₹{item.price * item.quantity}

                                            </h2>

                                        </div>

                                    ))}

                                </div>

                                {/* BOTTOM */}
                                <div className="border-t border-gray-800 mt-8 pt-8 flex items-end justify-between">

                                    {/* ADDRESS */}
                                    <div>

                                        <p className="text-gray-500 mb-2">

                                            Shipping Address

                                        </p>

                                        <h2 className="text-xl font-semibold">

                                            {order.shippingAddress}

                                        </h2>

                                    </div>

                                    {/* TOTAL */}
                                    <div className="text-right">

                                        <p className="text-gray-500 mb-2">

                                            Total Amount

                                        </p>

                                        <h2 className="text-5xl font-bold text-[#D4AF37]">

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