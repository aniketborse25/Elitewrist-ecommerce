import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {

    // Cart Count State
    const [cartCount, setCartCount] = useState(0);

    // Fetch Cart Data
    useEffect(() => {

        const getCart = async () => {

            try {

                const res = await axios.get(
                    "http://localhost:3000/cart"
                );

                // Total Quantity Count
                const totalItems = res.data.reduce(
                    (total, item) => total + item.quantity,
                    0
                );

                setCartCount(totalItems);

            }

            catch (error) {

                console.log(error);

            }

        };

        getCart();

    }, []);

    return (
        <nav className="bg-black text-white sticky top-0 z-50 border-b border-gray-800">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/">
                    <h1 className="text-3xl font-bold tracking-wide">
                        <span className="text-[#D4AF37]">Elite</span>Wrist
                    </h1>
                </Link>

                {/* Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">

                    <Link
                        to="/"
                        className="hover:text-[#D4AF37] transition duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/shop"
                        className="hover:text-[#D4AF37] transition duration-300"
                    >
                        Shop
                    </Link>

                </div>

                {/* Right Side Icons */}
                <div className="flex items-center gap-5">

                    {/* Search */}
                    <button className="hover:text-[#D4AF37] transition duration-300">
                        <Search size={22} />
                    </button>

                    {/* Cart */}
                    <Link
                        to="/cart"
                        className="relative hover:text-[#D4AF37] transition duration-300"
                    >
                        <ShoppingCart size={22} />

                        {/* Cart Count */}
                        <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">

                            {cartCount}

                        </span>
                    </Link>

                    {/* User */}
                    <Link
                        to="/profile"
                        className="hover:text-[#D4AF37] transition duration-300"
                    >
                        <User size={22} />
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;