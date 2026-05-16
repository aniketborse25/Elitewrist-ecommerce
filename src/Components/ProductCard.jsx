import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  return (

    <div className="bg-[#111] border border-[#222] rounded-[30px] overflow-hidden hover:border-[#D4AF37] duration-300 group">

      {/* IMAGE */}
      <div
        onClick={() => navigate(`/product/${product._id}`)}
        className="cursor-pointer overflow-hidden bg-black"
      >

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[320px] object-cover group-hover:scale-105 duration-500"
        />

      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* NAME */}
        <h2 className="text-2xl font-bold mb-3 text-white">

          {product.name}

        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-500 text-sm leading-7 mb-5">

          {product.description?.slice(0, 80)}...

        </p>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between">

          {/* PRICE */}
          <h3 className="text-[#D4AF37] text-2xl font-bold">

            ₹{product.price}

          </h3>

          {/* BUTTON */}
          <Link
            to={`/product/${product._id}`}
            className="bg-[#D4AF37] text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 duration-300"
          >

            View Details

          </Link>

        </div>

      </div>

    </div>

  );

};

export default ProductCard;