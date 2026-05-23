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

        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-6 py-10 md:py-16">

            {/* CARD */}
            <div className="w-full max-w-sm bg-[#111] border border-[#222] rounded-[28px] md:rounded-[35px] p-6 sm:p-7 md:p-8 hover:border-[#D4AF37] duration-500">

                {/* TOP */}
                <div className="text-center mb-8">

                    <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-xs mb-4">

                        Elite Profile

                    </p>

                    {/* AVATAR */}
                    {user?.profileImage ? (

                        <img
                            src={user.profileImage}
                            alt={user?.name}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[#D4AF37] mx-auto mb-5 md:mb-6 shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                        />

                    ) : (

                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#D4AF37] flex items-center justify-center text-black text-3xl md:text-4xl font-bold mx-auto mb-5 md:mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">

                            {user?.name?.charAt(0)?.toUpperCase() || "U"}

                        </div>

                    )}

                    {/* NAME */}
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 break-words">

                        {user?.name || "Elite User"}

                    </h1>

                    {/* EMAIL */}
                    <p className="text-gray-500 text-xs sm:text-sm break-all leading-6 md:leading-7 px-2">

                        {user?.email || "No Email"}

                    </p>

                    {/* LINE */}
                    <div className="w-12 md:w-14 h-[2px] bg-[#D4AF37] mx-auto my-5 md:my-6 rounded-full"></div>

                    {/* MEMBER */}
                    <p className="text-[#D4AF37] uppercase tracking-[3px] md:tracking-[4px] text-[10px] md:text-[11px]">

                        EliteWrist Member

                    </p>

                </div>

                {/* BUTTONS */}
                <div className="space-y-4">

                    {/* EDIT PROFILE */}
                    <button
                        onClick={() => navigate("/edit-profile")}
                        className="w-full bg-[#D4AF37] text-black py-3 rounded-2xl font-semibold hover:scale-[1.02] duration-300 text-sm md:text-base"
                    >

                        Edit Profile

                    </button>

                    {/* ORDERS */}
                    <button
                        onClick={() => navigate("/orders")}
                        className="w-full border border-[#2a2a2a] py-3 rounded-2xl hover:border-[#D4AF37] hover:text-[#D4AF37] duration-300 text-sm md:text-base"
                    >

                        My Orders

                    </button>

                    {/* HOME */}
                    <button
                        onClick={() => navigate("/")}
                        className="w-full border border-[#2a2a2a] py-3 rounded-2xl hover:border-[#D4AF37] hover:text-[#D4AF37] duration-300 text-sm md:text-base"
                    >

                        Back To Home

                    </button>

                    {/* LOGOUT */}
                    <button
                        onClick={handleLogout}
                        className="w-full border border-red-500 text-red-400 py-3 rounded-2xl hover:bg-red-500 hover:text-white duration-300 text-sm md:text-base"
                    >

                        Logout

                    </button>

                </div>

            </div>

        </div>

    );

};

export default Profile;