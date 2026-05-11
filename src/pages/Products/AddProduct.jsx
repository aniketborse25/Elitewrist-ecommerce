import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {

    const navigate = useNavigate();

    const [productData, setProductData] = useState({

        name: "",
        price: "",
        image: "",
        description: "",

    });

    // HANDLE INPUT
    const handleChange = (e) => {

        setProductData({

            ...productData,

            [e.target.name]: e.target.value,

        });

    };

    // ADD PRODUCT
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:3000/products",
                productData
            );

            // REDIRECT
            navigate("/shop");

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="bg-black min-h-screen flex items-center justify-center px-6 py-16">

            <div className="bg-[#111] border border-gray-800 rounded-3xl p-10 w-full max-w-2xl">

                {/* TITLE */}
                <h1 className="text-white text-5xl font-bold mb-10 text-center">

                    Add Product

                </h1>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    {/* NAME */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={productData.name}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
                        required
                    />

                    {/* PRICE */}
                    <input
                        type="number"
                        name="price"
                        placeholder="Product Price"
                        value={productData.price}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
                        required
                    />

                    {/* IMAGE */}
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={productData.image}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
                        required
                    />

                    {/* DESCRIPTION */}
                    <textarea
                        name="description"
                        placeholder="Product Description"
                        value={productData.description}
                        onChange={handleChange}
                        rows="5"
                        className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
                        required
                    />

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-[#D4AF37] text-black py-4 rounded-2xl text-lg font-bold hover:scale-105 duration-300"
                    >

                        Add Product

                    </button>

                </form>

            </div>

        </div>

    );

};

export default AddProduct;