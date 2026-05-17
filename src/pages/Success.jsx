import { Link } from "react-router-dom";

const Success = () => {

    return (

        <div className="bg-black min-h-screen flex items-center justify-center">

            <div className="bg-[#111] p-10 rounded-3xl text-center border border-[#222]">

                <h1 className="text-5xl font-bold text-[#D4AF37] mb-5">

                    Payment Successful 🎉

                </h1>

                <p className="text-gray-400 mb-8">

                    Your order has been placed successfully.

                </p>

                <Link
                    to="/orders"
                    className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold"
                >

                    View Orders

                </Link>

            </div>

        </div>

    );

};

export default Success;