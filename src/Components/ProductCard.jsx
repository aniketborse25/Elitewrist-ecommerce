import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition duration-300">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[300px] object-cover"
      />

      {/* Product Info */}
      <div className="p-5">

        <h2 className="text-white text-xl font-semibold mb-2">
          {product.name}
        </h2>

        <p className="text-yellow-500 text-lg font-bold mb-4">
          ₹{product.price}
        </p>

        {/* IMPORTANT */}
        <Link to={`/product/${product.id}`}>

          <button className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold">
            View Details
          </button>

        </Link>

      </div>
    </div>
  );
};

export default ProductCard;