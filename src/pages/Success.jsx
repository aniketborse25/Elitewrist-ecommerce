import { Link } from "react-router-dom";

const Success = () => {

    return (

        <div className="bg-black min-h-screen flex items-center justify-center px-6">

            <div className="bg-[#111] border border-[#222] rounded-[30px] p-12 text-center max-w-xl w-full">

                <h1 className="text-5xl font-bold text-[#D4AF37] mb-6">

                    Payment Successful 🎉

                </h1>

                <p className="text-gray-400 text-lg mb-10">

                    Thank you for shopping with EliteWrist.
                    Your premium order has been placed successfully.

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