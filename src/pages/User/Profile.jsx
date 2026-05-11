import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const Profile = () => {

    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    // NOT LOGIN
    if (!user) {
        return <Navigate to="/login" />;
    }

    // LOGOUT
    const handleLogout = () => {

        localStorage.removeItem("userdata");

        navigate("/login");

    };

    return (

        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">

            {/* CARD */}
            <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-[30px] p-8 shadow-[0_0_50px_rgba(212,175,55,0.08)]">

                {/* TOP */}
                <div className="text-center">

                    {/* AVATAR */}
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl font-bold text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]">

                        {user.name.charAt(0).toUpperCase()}

                    </div>

                    {/* TITLE */}
                    <h1 className="text-3xl font-bold mt-5 mb-2">

                        Welcome Back

                    </h1>

                    <p className="text-gray-400 text-base">

                        EliteWrist Member

                    </p>

                </div>

                {/* INFO */}
                <div className="mt-8 space-y-4">

                    {/* NAME */}
                    <div className="bg-black border border-gray-800 rounded-2xl p-4 hover:border-[#D4AF37] duration-300">

                        <p className="text-gray-500 text-sm mb-2">
                            Full Name
                        </p>

                        <h2 className="text-lg font-semibold">

                            {user.name}

                        </h2>

                    </div>

                    {/* EMAIL */}
                    <div className="bg-black border border-gray-800 rounded-2xl p-4 hover:border-[#D4AF37] duration-300">

                        <p className="text-gray-500 text-sm mb-2">
                            Email Address
                        </p>

                        <h2 className="text-base font-semibold break-all">

                            {user.email}

                        </h2>

                    </div>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">

                    {/* HOME */}
                    <button
                        onClick={() => navigate("/")}
                        className="flex-1 bg-[#D4AF37] text-black py-3 rounded-2xl font-bold hover:scale-105 duration-300"
                    >

                        Home

                    </button>

                    {/* LOGOUT */}
                    <button
                        onClick={handleLogout}
                        className="flex-1 border border-red-500 text-red-500 py-3 rounded-2xl font-bold hover:bg-red-500 hover:text-white duration-300"
                    >

                        Logout

                    </button>

                </div>

            </div>

        </div>

    );

};

export default Profile;