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
                    userId: user.id || user._id,
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

                {/* LEFT IMAGE */}
                <div className="lg:sticky top-0 lg:h-screen flex items-center justify-center bg-[#050505] border-b lg:border-b-0 lg:border-r border-[#161616] px-5 md:px-10 py-10 lg:py-0">

                    <div className="relative">

                        {/* GLOW */}
                        <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[80px] md:blur-[120px] rounded-full"></div>

                        {/* IMAGE */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="relative z-10 w-full max-w-[260px] sm:max-w-[400px] md:max-w-[700px] object-contain hover:scale-[1.03] duration-700"
                        />

                    </div>

                </div>

                {/* RIGHT CONTENT */}
                <div className="px-5 sm:px-7 md:px-10 lg:px-20 py-12 md:py-20">

                    <div className="max-w-[650px]">

                        {/* COLLECTION */}
                        <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-xs mb-5 md:mb-8">

                            EliteWrist Luxury Collection

                        </p>

                        {/* PRODUCT NAME */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[80px] font-light mb-6 md:mb-10">

                            {product.name}

                        </h1>

                        {/* SHORT DESCRIPTION */}
                        <p className="text-gray-400 text-base md:text-xl leading-8 md:leading-[42px] mb-8 md:mb-12">

                            {product.shortDescription}

                        </p>

                        {/* PRICE */}
                        <div className="mb-10 md:mb-14">

                            <h2 className="text-[#D4AF37] text-3xl md:text-4xl font-light mb-3">

                                ₹ {product.price}

                            </h2>

                            <p className="text-gray-500 text-xs md:text-sm">

                                Inclusive of all taxes

                            </p>

                        </div>

                        {/* QUANTITY + BUTTON */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-5 mb-14 md:mb-20">

                            {/* QUANTITY */}
                            <div className="flex items-center border border-[#222] bg-[#0c0c0c] w-fit">

                                <button
                                    onClick={() =>
                                        quantity > 1 &&
                                        setQuantity(quantity - 1)
                                    }
                                    className="px-5 md:px-6 py-3 md:py-4 hover:bg-[#151515] duration-300"
                                >

                                    -

                                </button>

                                <span className="px-6 md:px-8 text-base md:text-lg">

                                    {quantity}

                                </span>

                                <button
                                    onClick={() =>
                                        setQuantity(quantity + 1)
                                    }
                                    className="px-5 md:px-6 py-3 md:py-4 hover:bg-[#151515] duration-300"
                                >

                                    +

                                </button>

                            </div>

                            {/* BUTTON */}
                            <button
                                onClick={addToCart}
                                className="bg-[#D4AF37] text-black px-8 md:px-14 py-3 md:py-4 uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm font-semibold hover:opacity-90 duration-300 w-full sm:w-auto"
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
                                className="w-full flex justify-between items-center py-5 md:py-7"
                            >

                                <span className="uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm text-left">

                                    Product Description

                                </span>

                                <span className="text-[#D4AF37] text-lg md:text-xl">

                                    {openSection === "description" ? "−" : "+"}

                                </span>

                            </button>

                            {openSection === "description" && (

                                <div className="pb-8 md:pb-10 text-gray-400 text-sm md:text-lg leading-7 md:leading-[38px]">

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
                                className="w-full flex justify-between items-center py-5 md:py-7"
                            >

                                <span className="uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm text-left">

                                    Product Features

                                </span>

                                <span className="text-[#D4AF37] text-lg md:text-xl">

                                    {openSection === "features" ? "−" : "+"}

                                </span>

                            </button>

                            {openSection === "features" && (

                                <div className="pb-8 md:pb-10 space-y-4 md:space-y-5">

                                    {product.features?.map((feature, index) => (

                                        <div
                                            key={index}
                                            className="flex items-start gap-3 md:gap-4 text-sm md:text-lg text-gray-400 leading-7"
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
                                className="w-full flex justify-between items-center py-5 md:py-7"
                            >

                                <span className="uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm text-left">

                                    Manufacturer & Importer

                                </span>

                                <span className="text-[#D4AF37] text-lg md:text-xl">

                                    {openSection === "manufacturing" ? "−" : "+"}

                                </span>

                            </button>

                            {openSection === "manufacturing" && (

                                <div className="pb-8 md:pb-10 text-gray-400 text-sm md:text-lg leading-7 md:leading-[38px]">

                                    {product.manufacturing}

                                </div>

                            )}

                        </div>

                        {/* SPECIFICATIONS */}
                        <div className="mt-16 md:mt-24">

                            <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-xs mb-8 md:mb-14">

                                Specifications

                            </p>

                            <div className="space-y-6 md:space-y-8">

                                <div className="flex justify-between gap-5 border-b border-[#1a1a1a] pb-5 md:pb-6">

                                    <span className="text-gray-500 text-sm md:text-base">
                                        Movement
                                    </span>

                                    <span className="text-sm md:text-lg text-right">
                                        {product.specifications?.movement}
                                    </span>

                                </div>

                                <div className="flex justify-between gap-5 border-b border-[#1a1a1a] pb-5 md:pb-6">

                                    <span className="text-gray-500 text-sm md:text-base">
                                        Case Material
                                    </span>

                                    <span className="text-sm md:text-lg text-right">
                                        {product.specifications?.caseMaterial}
                                    </span>

                                </div>

                                <div className="flex justify-between gap-5 border-b border-[#1a1a1a] pb-5 md:pb-6">

                                    <span className="text-gray-500 text-sm md:text-base">
                                        Dial Color
                                    </span>

                                    <span className="text-sm md:text-lg text-right">
                                        {product.specifications?.dialColor}
                                    </span>

                                </div>

                                <div className="flex justify-between gap-5 border-b border-[#1a1a1a] pb-5 md:pb-6">

                                    <span className="text-gray-500 text-sm md:text-base">
                                        Strap Material
                                    </span>

                                    <span className="text-sm md:text-lg text-right">
                                        {product.specifications?.strapMaterial}
                                    </span>

                                </div>

                                <div className="flex justify-between gap-5 border-b border-[#1a1a1a] pb-5 md:pb-6">

                                    <span className="text-gray-500 text-sm md:text-base">
                                        Water Resistance
                                    </span>

                                    <span className="text-sm md:text-lg text-right">
                                        {product.specifications?.waterResistance}
                                    </span>

                                </div>

                                <div className="flex justify-between gap-5 border-b border-[#1a1a1a] pb-5 md:pb-6">

                                    <span className="text-gray-500 text-sm md:text-base">
                                        Glass
                                    </span>

                                    <span className="text-sm md:text-lg text-right">
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