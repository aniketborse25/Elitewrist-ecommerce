import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../../Context/UserContext";
import Loader from "../../Components/Loader";

const ProductDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const { user, loading } = useContext(UserContext);

    const [product, setProduct] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const [openSection, setOpenSection] = useState("description");

    // FETCH PRODUCT
    useEffect(() => {

        window.scrollTo(0, 0);

        const fetchProduct = async () => {

            try {

                const res = await axios.get(
                    `https://elitewrist-api.onrender.com/api/v1/products/${id}`
                );

                setProduct(res.data.product);

            }

            catch (error) {

                console.log(error);

            }

        };

        fetchProduct();

    }, [id]);

    // ADD TO CART
    const addToCart = async () => {

        if (loading) {

            alert("Please Wait...");

            return;

        }

        if (!user) {

            navigate("/login");

            return;

        }

        try {

            await axios.post(
                "https://elitewrist-api.onrender.com/api/v1/user/cart/add",
                {
                    userId: user.id,
                    productId: product._id,
                    quantity: quantity,
                }
            );

            navigate("/cart");

        }

        catch (error) {

            console.log(error);

        }

    };

    // LOADING
    if (!product) {

        return <Loader />;

    }

    return (

        <div className="bg-black text-white min-h-screen">

            <div className="max-w-[1700px] mx-auto grid lg:grid-cols-[55%_45%]">

                {/* LEFT SIDE IMAGE */}
                <div className="sticky top-0 h-screen flex items-center justify-center bg-[#050505] border-r border-[#161616] px-10">

                    <div className="relative">

                        {/* GLOW */}
                        <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

                        {/* IMAGE */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="relative z-10 w-full max-w-[900px] object-contain hover:scale-[1.03] duration-700"
                        />

                    </div>

                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="px-8 lg:px-20 py-24">

                    <div className="max-w-[650px]">

                        {/* COLLECTION */}
                        <p className="text-[#D4AF37] uppercase tracking-[8px] text-xs mb-8">

                            EliteWrist Luxury Collection

                        </p>

                        {/* PRODUCT NAME */}
                        <h1 className="text-5xl lg:text-6xl leading-[80px] font-light mb-10">

                            {product.name}

                        </h1>

                        {/* SHORT DESCRIPTION */}
                        <p className="text-gray-400 text-xl leading-[42px] mb-12">

                            {product.shortDescription}

                        </p>

                        {/* PRICE */}
                        <div className="mb-14">

                            <h2 className="text-[#D4AF37] text-4xl font-light mb-3">

                                ₹ {product.price}

                            </h2>

                            <p className="text-gray-500 text-sm">

                                Inclusive of all taxes

                            </p>

                        </div>

                        {/* QUANTITY + BUTTON */}
                        <div className="flex flex-wrap items-center gap-5 mb-20">

                            {/* QUANTITY */}
                            <div className="flex items-center border border-[#222] bg-[#0c0c0c]">

                                <button
                                    onClick={() =>
                                        quantity > 1 &&
                                        setQuantity(quantity - 1)
                                    }
                                    className="px-6 py-4 hover:bg-[#151515] duration-300"
                                >
                                    -
                                </button>

                                <span className="px-8 text-lg">

                                    {quantity}

                                </span>

                                <button
                                    onClick={() =>
                                        setQuantity(quantity + 1)
                                    }
                                    className="px-6 py-4 hover:bg-[#151515] duration-300"
                                >
                                    +
                                </button>

                            </div>

                            {/* ADD TO CART */}
                            <button
                                onClick={addToCart}
                                className="bg-[#D4AF37] text-black px-14 py-4 uppercase tracking-[3px] text-sm font-semibold hover:opacity-90 duration-300"
                            >

                                Add To Cart

                            </button>

                        </div>

                        {/* ACCORDION */}

                        {/* DESCRIPTION */}
                        <div className="border-t border-[#1a1a1a]">

                            <button
                                onClick={() =>
                                    setOpenSection(
                                        openSection === "description"
                                            ? ""
                                            : "description"
                                    )
                                }
                                className="w-full flex justify-between items-center py-7"
                            >

                                <span className="uppercase tracking-[3px] text-sm">

                                    Product Description

                                </span>

                                <span className="text-[#D4AF37] text-xl">

                                    {openSection === "description" ? "−" : "+"}

                                </span>

                            </button>

                            {openSection === "description" && (

                                <div className="pb-10 text-gray-400 text-lg leading-[38px]">

                                    {product.fullDescription}

                                </div>

                            )}

                        </div>

                        {/* FEATURES */}
                        <div className="border-t border-[#1a1a1a]">

                            <button
                                onClick={() =>
                                    setOpenSection(
                                        openSection === "features"
                                            ? ""
                                            : "features"
                                    )
                                }
                                className="w-full flex justify-between items-center py-7"
                            >

                                <span className="uppercase tracking-[3px] text-sm">

                                    Product Features

                                </span>

                                <span className="text-[#D4AF37] text-xl">

                                    {openSection === "features" ? "−" : "+"}

                                </span>

                            </button>

                            {openSection === "features" && (

                                <div className="pb-10 space-y-5">

                                    {product.features?.map((feature, index) => (

                                        <div
                                            key={index}
                                            className="flex items-center gap-4 text-lg text-gray-400"
                                        >

                                            <span className="text-[#D4AF37]">

                                                ✦

                                            </span>

                                            {feature}

                                        </div>

                                    ))}

                                </div>

                            )}

                        </div>

                        {/* MANUFACTURING */}
                        <div className="border-t border-b border-[#1a1a1a]">

                            <button
                                onClick={() =>
                                    setOpenSection(
                                        openSection === "manufacturing"
                                            ? ""
                                            : "manufacturing"
                                    )
                                }
                                className="w-full flex justify-between items-center py-7"
                            >

                                <span className="uppercase tracking-[3px] text-sm">

                                    Manufacturer & Importer

                                </span>

                                <span className="text-[#D4AF37] text-xl">

                                    {openSection === "manufacturing" ? "−" : "+"}

                                </span>

                            </button>

                            {openSection === "manufacturing" && (

                                <div className="pb-10 text-gray-400 text-lg leading-[38px]">

                                    {product.manufacturing}

                                </div>

                            )}

                        </div>

                        {/* SPECIFICATIONS */}
                        <div className="mt-24">

                            <p className="text-[#D4AF37] uppercase tracking-[8px] text-xs mb-14">

                                Specifications

                            </p>

                            <div className="space-y-8">

                                <div className="flex justify-between border-b border-[#1a1a1a] pb-6">

                                    <span className="text-gray-500">
                                        Movement
                                    </span>

                                    <span className="text-lg">
                                        {product.specifications?.movement}
                                    </span>

                                </div>

                                <div className="flex justify-between border-b border-[#1a1a1a] pb-6">

                                    <span className="text-gray-500">
                                        Case Material
                                    </span>

                                    <span className="text-lg">
                                        {product.specifications?.caseMaterial}
                                    </span>

                                </div>

                                <div className="flex justify-between border-b border-[#1a1a1a] pb-6">

                                    <span className="text-gray-500">
                                        Dial Color
                                    </span>

                                    <span className="text-lg">
                                        {product.specifications?.dialColor}
                                    </span>

                                </div>

                                <div className="flex justify-between border-b border-[#1a1a1a] pb-6">

                                    <span className="text-gray-500">
                                        Strap Material
                                    </span>

                                    <span className="text-lg">
                                        {product.specifications?.strapMaterial}
                                    </span>

                                </div>

                                <div className="flex justify-between border-b border-[#1a1a1a] pb-6">

                                    <span className="text-gray-500">
                                        Water Resistance
                                    </span>

                                    <span className="text-lg">
                                        {product.specifications?.waterResistance}
                                    </span>

                                </div>

                                <div className="flex justify-between border-b border-[#1a1a1a] pb-6">

                                    <span className="text-gray-500">
                                        Glass
                                    </span>

                                    <span className="text-lg">
                                        {product.specifications?.glass}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ProductDetails;