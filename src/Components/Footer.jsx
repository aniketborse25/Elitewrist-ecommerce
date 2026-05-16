import { Link } from "react-router-dom";

const Footer = () => {

  return (

    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>

          <h2 className="text-3xl font-bold mb-4">

            <span className="text-[#D4AF37]">
              Elite
            </span>

            Wrist

          </h2>

          <p className="text-gray-400 leading-7">

            Premium watches for every style.
            Discover luxury and elegance.

          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-xl font-semibold mb-5">

            Quick Links

          </h3>

          <div className="flex flex-col gap-3 text-gray-400">

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

          <h3 className="text-xl font-semibold mb-5">

            Contact

          </h3>

          <div className="text-gray-400 space-y-3">

            <p>Email: support@EliteWrist.com</p>

            <p>Phone: +91 98765 43210</p>

            <p> Mumbai, India </p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-5 text-gray-500 text-sm">

        © 2026 EliteWrist — Crafted For Timeless Luxury

      </div>

    </footer>

  );

};

export default Footer;