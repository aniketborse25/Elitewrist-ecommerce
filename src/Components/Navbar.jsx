import { Link, useNavigate } from "react-router-dom";

import {
    ShoppingCart,
    Search,
    UserCircle2,
    X
} from "lucide-react";

import { useEffect, useState, useContext } from "react";

import axios from "axios";

import UserContext from "../Context/UserContext";

const Navbar = () => {

    const navigate = useNavigate();

    // USER CONTEXT
    const { user } = useContext(UserContext);

    // CART COUNT
    const [cartCount, setCartCount] = useState(0);

    // SEARCH
    const [showSearch, setShowSearch] = useState(false);

    const [search, setSearch] = useState("");

    // FETCH CART
    useEffect(() => {

        const getCart = async () => {

            if (!user) {

                setCartCount(0);

                return;

            }

            try {

                const res = await axios.get(
                    `https://elitewrist-api.onrender.com/api/v1/user/cart/${user.id}`
                );

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

    // SEARCH PRODUCT
    const handleSearch = (e) => {

        e.preventDefault();

        // EMPTY
        if (!search.trim()) {

            return;

        }

        // REDIRECT
        navigate(`/collection?search=${search}`);

        // CLOSE SEARCH
        setShowSearch(false);

    };

    return (

        <nav className="bg-black text-white sticky top-0 z-50 border-b border-gray-800">

            <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

                {/* LEFT - LOGO */}
                <div className="flex justify-start">

                    <Link to="/" className="flex items-center">

                        <img
                            src="/images/LOGO.png"
                            alt="EliteWrist Logo"
                            className="h-12 scale-150 origin-left w-auto object-contain"
                        />

                    </Link>

                </div>

                {/* CENTER - MENU */}
                <div className="hidden md:flex items-center justify-center gap-10 text-sm font-medium">

                    <Link
                        to="/"
                        className="hover:text-[#D4AF37] transition duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/collection"
                        className="hover:text-[#D4AF37] transition duration-300"
                    >
                        Collection
                    </Link>

                    <Link
                        to="/brand"
                        className="hover:text-[#D4AF37] transition duration-300"
                    >
                        Brand
                    </Link>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-end gap-5">

                    {/* SEARCH ICON */}
                    <button
                        onClick={() =>
                            setShowSearch(!showSearch)
                        }
                        className="hover:text-[#D4AF37] transition duration-300"
                    >

                        {showSearch ? (

                            <X size={22} />

                        ) : (

                            <Search size={22} />

                        )}

                    </button>

                    {/* CART */}
                    <Link
                        to="/cart"
                        className="relative hover:text-[#D4AF37] transition duration-300"
                    >

                        <ShoppingCart size={22} />

                        {/* COUNT */}
                        {user && cartCount > 0 && (

                            <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">

                                {cartCount}

                            </span>

                        )}

                    </Link>

                    {/* PROFILE */}
                    <Link
                        to={user ? "/profile" : "/login"}
                        className="hover:text-[#D4AF37] transition duration-300"
                    >

                        {user ? (

                            <div className="w-9 h-9 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold text-sm">

                                {user.name.charAt(0).toUpperCase()}

                            </div>

                        ) : (

                            <UserCircle2 size={28} />

                        )}

                    </Link>

                </div>

            </div>

            {/* SEARCH BAR */}
            {showSearch && (

                <div className="border-t border-gray-800 px-6 py-5 bg-black">

                    <form
                        onSubmit={handleSearch}
                        className="max-w-3xl mx-auto flex gap-4"
                    >

                        <input
                            type="text"
                            placeholder="Search luxury watches..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="flex-1 bg-[#111] border border-[#333] rounded-2xl px-6 py-4 outline-none focus:border-[#D4AF37]"
                        />

                        <button
                            type="submit"
                            className="bg-[#D4AF37] text-black px-8 rounded-2xl font-semibold hover:scale-105 duration-300"
                        >

                            Search

                        </button>

                    </form>

                </div>

            )}

        </nav>

    );

};

export default Navbar;