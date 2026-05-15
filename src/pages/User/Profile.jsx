import { useContext } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import UserContext from "../../Context/UserContext";

import Loader from "../../Components/Loader";

const Profile = () => {

    const navigate = useNavigate();

    // USER CONTEXT
    const { user, setUser, loading } = useContext(UserContext);

    // USER LOADING
    if (loading) {

        return <Loader />;

    }

    // NOT LOGIN
    if (!user) {

        return <Navigate to="/login" />;

    }

    // LOGOUT
    const handleLogout = () => {

        // CLEAR STORAGE
        localStorage.removeItem("userdata");

        // CLEAR USER
        setUser(null);

        // REDIRECT
        navigate("/login");

    };

    return (

        <div className="min-h-[80vh] bg-black text-white flex items-center justify-center px-6 py-10">

            {/* CARD */}
            <div className="w-full max-w-sm bg-[#0f0f0f] border border-[#1f1f1f] rounded-[30px] p-7 hover:border-[#D4AF37] duration-500">

                {/* AVATAR */}
                <div className="flex justify-center mb-6">

                    <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center text-black text-3xl font-bold">

                        {user.name.charAt(0).toUpperCase()}

                    </div>

                </div>

                {/* INFO */}
                <div className="text-center">

                    <h1 className="text-2xl font-bold mb-2">

                        {user.name}

                    </h1>

                    <p className="text-gray-500 text-sm break-all">

                        {user.email}

                    </p>

                    <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto my-5 rounded-full"></div>

                    <p className="text-[#D4AF37] uppercase tracking-[4px] text-[11px]">

                        EliteWrist Member

                    </p>

                </div>

                {/* BUTTONS */}
                <div className="mt-8 space-y-3">

                    <button
                        onClick={() => navigate("/orders")}
                        className="w-full bg-[#D4AF37] text-black py-3 rounded-2xl font-semibold"
                    >

                        My Orders

                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="w-full border border-[#2a2a2a] py-3 rounded-2xl"
                    >

                        Back To Home

                    </button>

                    <button
                        onClick={handleLogout}
                        className="w-full border border-red-500 text-red-400 py-3 rounded-2xl"
                    >

                        Logout

                    </button>

                </div>

            </div>

        </div>

    );

};

export default Profile;