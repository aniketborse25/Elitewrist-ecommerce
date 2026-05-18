import { Link } from "react-router-dom";

import {
  Instagram,
  Youtube,
  Linkedin
} from "lucide-react";

const Footer = () => {

  return (

    <footer className="bg-black text-white border-t border-gray-800 mt-20">

      {/* GOLD LINE */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>

          {/* LOGO */}
          <Link to="/" className="inline-block mb-6">

            <img
              src="/images/LOGO.png"
              alt="EliteWrist Logo"
              className="h-20 w-auto object-contain"
            />

          </Link>

          <p className="text-gray-400 leading-8 max-w-sm">

            Crafting timeless luxury watches
            for modern elegance and prestige.

          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-5 mt-6">

            <a
              href="#"
              className="hover:text-[#D4AF37] duration-300"
            >
              <Instagram size={22} />
            </a>

            <a
              href="#"
              className="hover:text-[#D4AF37] duration-300"
            >
              <Youtube size={22} />
            </a>

            <a
              href="#"
              className="hover:text-[#D4AF37] duration-300"
            >
              <Linkedin size={22} />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-2xl font-semibold mb-6 text-white">

            Quick Links

          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

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

          <h3 className="text-2xl font-semibold mb-6 text-white">

            Contact

          </h3>

          <div className="text-gray-400 space-y-4 leading-7">

            <p>Email: support@EliteWrist.com</p>

            <p>Phone: +91 98765 43210</p>

            <p>Mumbai, India</p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-6 text-gray-500 text-sm tracking-wide">

        © 2026 EliteWrist — Crafted For Timeless Luxury

      </div>

    </footer>

  );

};

export default Footer;
