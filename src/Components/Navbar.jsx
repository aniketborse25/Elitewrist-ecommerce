import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";

const Navbar = () => {

    // USER CONTEXT
    const { user } = useContext(UserContext);

    // Cart Count State
    const [cartCount, setCartCount] = useState(0);

    // Fetch Cart Data
    useEffect(() => {

        const getCart = async () => {

            // NO USER
            if (!user) return;

            try {

                const res = await axios.get(
                    `https://elitewrist-api.onrender.com/api/v1/user/cart/${user.id}`
                );

                // TOTAL QUANTITY
                const totalQuantity = (res.data.items || []).reduce(
                    (acc, item) => acc + item.quantity,
                    0
                );

                setCartCount(totalQuantity);

            }

            catch (error) {

                console.log(error);

            }

        };

        getCart();

    }, [user]);

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