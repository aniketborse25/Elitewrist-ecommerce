import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",
        address: "",
        phone: "",

    });

    // HANDLE INPUT
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    // PLACE ORDER
    const placeOrder = async (e) => {

        e.preventDefault();

        // GET CART
        const cartRes = await axios.get(
            "http://localhost:3000/cart"
        );

        const cartItems = cartRes.data;

        // TOTAL
        let total = 0;

        cartItems.forEach((item) => {

            total += item.price * item.quantity;

        });

        // ORDER OBJECT
        const order = {

            customer: formData,

            items: cartItems,

            total,

        };

        // SAVE ORDER
        await axios.post(
            "http://localhost:3000/orders",
            order
        );

        // CLEAR CART
        cartItems.forEach(async (item) => {

            await axios.delete(
                `http://localhost:3000/cart/${item.id}`
            );

        });

        // GO ORDERS PAGE
        navigate("/orders");

    };

    return (

        <div className="bg-black min-h-screen text-white flex items-center justify-center p-10">

            <div className="bg-[#111] border border-gray-800 rounded-3xl p-10 w-full max-w-xl">

                <h1 className="text-5xl font-bold mb-8">

                    Checkout

                </h1>

                {/* FORM */}
                <form
                    onSubmit={placeOrder}
                    className="space-y-5"
                >

                    {/* NAME */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 p-4 rounded-2xl outline-none"
                        required
                    />

                    {/* ADDRESS */}
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 p-4 rounded-2xl outline-none"
                        required
                    />

                    {/* PHONE */}
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 p-4 rounded-2xl outline-none"
                        required
                    />

                    {/* BUTTON */}
                    <button className="w-full bg-[#D4AF37] text-black py-4 rounded-2xl font-bold">

                        Place Order

                    </button>

                </form>

            </div>

        </div>

    );

};

export default Checkout;