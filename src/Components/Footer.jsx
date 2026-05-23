import { Link } from "react-router-dom";

const Footer = () => {

  return (

    <footer className="bg-black text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

        {/* LEFT */}
        <div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">

            <span className="text-[#D4AF37]">

              Elite

            </span>

            Wrist

          </h2>

          <p className="text-gray-400 leading-7 text-sm md:text-base max-w-sm">

            Premium watches crafted for timeless elegance,
            luxury, and modern sophistication.

          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-lg md:text-xl font-semibold mb-5">

            Quick Links

          </h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm md:text-base">

            <Link
              to="/"
              className="hover:text-[#D4AF37] duration-300"
            >

              Home

            </Link>

            <Link
              to="/collection"
              className="hover:text-[#D4AF37] duration-300"
            >

              Collection

            </Link>

            <Link
              to="/cart"
              className="hover:text-[#D4AF37] duration-300"
            >

              Cart

            </Link>

            <Link
              to="/profile"
              className="hover:text-[#D4AF37] duration-300"
            >

              Profile

            </Link>

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-lg md:text-xl font-semibold mb-5">

            Contact

          </h3>

          <div className="text-gray-400 space-y-3 text-sm md:text-base">

            <p>

              support@elitewrist.com

            </p>

            <p>

              +91 98765 43210

            </p>

            <p>

              Mumbai, India

            </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-5 text-gray-500 text-xs sm:text-sm px-4">

        © 2026 EliteWrist — Crafted For Timeless Luxury

      </div>

    </footer>

  );

};

export default Footer;