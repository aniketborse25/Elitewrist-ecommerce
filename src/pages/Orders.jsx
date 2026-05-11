import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

    // ORDERS STATE
    const [orders, setOrders] = useState([]);

    // FETCH ORDERS
    const fetchOrders = async () => {

        try {

            const res = await axios.get(
                "http://localhost:3000/orders"
            );

            setOrders(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    // RUN
    useEffect(() => {

        fetchOrders();

    }, []);

    return (

        <div className="bg-black min-h-screen text-white px-6 py-16">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h1 className="text-5xl font-bold mb-12">

                    My Orders

                </h1>

                {/* EMPTY */}
                {orders.length === 0 ? (

                    <div className="text-center text-gray-400 text-2xl mt-32">

                        No Orders Yet

                    </div>

                ) : (

                    <div className="space-y-8">

                        {orders.map((order) => (

                            <div
                                key={order.id}
                                className="bg-[#111] border border-gray-800 rounded-3xl p-8"
                            >

                                {/* TOP */}
                                <div className="flex justify-between items-start mb-8">

                                    <div>

                                        <p className="text-gray-500 text-sm mb-2">

                                            ORDER DETAILS

                                        </p>

                                        {/* ORDER ID */}
                                        <h2 className="text-lg font-semibold text-gray-300 mb-1">

                                            Order #{order.id}

                                        </h2>

                                        {/* DATE */}
                                        <p className="text-gray-500 text-sm">

                                            Ordered on {order.date}

                                        </p>

                                    </div>

                                    {/* STATUS */}
                                    <div className="bg-green-500/10 text-green-400 border border-green-500 px-4 py-2 rounded-full text-sm font-semibold">

                                        Confirmed

                                    </div>

                                </div>

                                {/* PRODUCTS */}
                                <div className="space-y-5">

                                    {order.items.map((item) => (

                                        <div
                                            key={item.id}
                                            className="flex items-center gap-5 border-b border-gray-800 pb-5"
                                        >

                                            {/* IMAGE */}
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-32 h-32 object-contain bg-black rounded-2xl"
                                            />

                                            {/* INFO */}
                                            <div className="flex-1">

                                                <h3 className="text-2xl font-bold mb-2">

                                                    {item.name}

                                                </h3>

                                                <p className="text-gray-400">

                                                    Quantity: {item.quantity}

                                                </p>

                                            </div>

                                            {/* PRICE */}
                                            <h2 className="text-[#D4AF37] text-2xl font-bold">

                                                ₹{item.price * item.quantity}

                                            </h2>

                                        </div>

                                    ))}

                                </div>

                                {/* TOTAL */}
                                <div className="flex justify-between items-center mt-8">

                                    <h2 className="text-2xl font-bold">

                                        Total

                                    </h2>

                                    <h2 className="text-4xl font-bold text-[#D4AF37]">

                                        ₹{order.total}

                                    </h2>

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