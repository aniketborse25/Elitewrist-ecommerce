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

        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">

            {/* CARD */}
            <div className="w-full max-w-sm bg-[#111] border border-[#222] rounded-[35px] p-8 hover:border-[#D4AF37] duration-500">

                {/* TOP */}
                <div className="text-center mb-8">

                    <p className="text-[#D4AF37] uppercase tracking-[5px] text-xs mb-4">

                        Elite Profile

                    </p>

                    {/* AVATAR */}
                    <div className="w-24 h-24 rounded-full bg-[#D4AF37] flex items-center justify-center text-black text-4xl font-bold mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">

                        {user.name.charAt(0).toUpperCase()}

                    </div>

                    {/* NAME */}
                    <h1 className="text-3xl font-bold mb-3">

                        {user.name}

                    </h1>

                    {/* EMAIL */}
                    <p className="text-gray-500 text-sm break-all leading-7">

                        {user.email}

                    </p>

                    {/* LINE */}
                    <div className="w-14 h-[2px] bg-[#D4AF37] mx-auto my-6 rounded-full"></div>

                    {/* MEMBER */}
                    <p className="text-[#D4AF37] uppercase tracking-[4px] text-[11px]">

                        EliteWrist Member

                    </p>

                </div>

                {/* BUTTONS */}
                <div className="space-y-4">

                    {/* ORDERS */}
                    <button
                        onClick={() => navigate("/orders")}
                        className="w-full bg-[#D4AF37] text-black py-3 rounded-2xl font-semibold hover:scale-[1.02] duration-300"
                    >

                        My Orders

                    </button>

                    {/* HOME */}
                    <button
                        onClick={() => navigate("/")}
                        className="w-full border border-[#2a2a2a] py-3 rounded-2xl hover:border-[#D4AF37] hover:text-[#D4AF37] duration-300"
                    >

                        Back To Home

                    </button>

                    {/* LOGOUT */}
                    <button
                        onClick={handleLogout}
                        className="w-full border border-red-500 text-red-400 py-3 rounded-2xl hover:bg-red-500 hover:text-white duration-300"
                    >

                        Logout

                    </button>

                </div>

            </div>

        </div>

    );

};

export default Profile;