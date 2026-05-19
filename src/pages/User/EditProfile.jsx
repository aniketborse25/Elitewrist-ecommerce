import { useContext, useEffect, useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import axios from "axios";

import UserContext from "../../Context/UserContext";

import Loader from "../../Components/Loader";

const EditProfile = () => {

    const navigate = useNavigate();

    // USER CONTEXT
    const { user, setUser, loading } = useContext(UserContext);

    // STATES
    const [name, setName] = useState("");

    const [address, setAddress] = useState("");

    const [updateLoading, setUpdateLoading] = useState(false);

    // LOADING
    if (loading) {

        return <Loader />;

    }

    // NOT LOGIN
    if (!user) {

        return <Navigate to="/login" />;

    }

    // LOAD USER DATA
    useEffect(() => {

        if (user) {

            setName(user?.name || "");

            setAddress(user?.address || "");

        }

    }, [user]);

    // UPDATE PROFILE
    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            setUpdateLoading(true);

            const res = await axios.put(

                "https://elitewrist-api.onrender.com/api/v1/admin/users/update-profile",

                {
                    userId: user.id,
                    name,
                    address
                }

            );

            // UPDATE LOCAL STORAGE
            localStorage.setItem(

                "userdata",

                JSON.stringify(res.data.user)

            );

            // UPDATE CONTEXT
            setUser(res.data.user);

            alert("Profile updated successfully");

            // REDIRECT
            navigate("/profile");

        }
        catch (error) {

            console.log(error);

            // SHOW BACKEND ERROR
            console.log(error.response?.data);

            alert(

                error.response?.data?.message ||

                "Update failed"

            );

        }

        finally {

            setUpdateLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">

            {/* CARD */}
            <div className="w-full max-w-md bg-[#111] border border-[#222] rounded-[35px] p-8 hover:border-[#D4AF37] duration-500">

                {/* TOP */}
                <div className="text-center mb-8">

                    <p className="text-[#D4AF37] uppercase tracking-[5px] text-xs mb-4">

                        EliteWrist

                    </p>

                    <h1 className="text-3xl font-bold mb-3">

                        Edit Profile

                    </h1>

                    <p className="text-gray-500 text-sm">

                        Update your personal information

                    </p>

                    {/* LINE */}
                    <div className="w-14 h-[2px] bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>

                </div>

                {/* FORM */}
                <form
                    onSubmit={handleUpdate}
                    className="space-y-5"
                >

                    {/* NAME */}
                    <div>

                        <label className="block mb-2 text-sm text-gray-400">

                            Full Name

                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            className="w-full bg-black border border-[#2a2a2a] rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
                            placeholder="Enter your name"
                        />

                    </div>

                    {/* ADDRESS */}
                    <div>

                        <label className="block mb-2 text-sm text-gray-400">

                            Address

                        </label>

                        <textarea
                            value={address}
                            onChange={(e) =>
                                setAddress(e.target.value)
                            }
                            rows="4"
                            className="w-full bg-black border border-[#2a2a2a] rounded-2xl px-5 py-4 outline-none focus:border-[#D4AF37]"
                            placeholder="Enter your address"
                        />

                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-4 pt-2">

                        {/* SAVE */}
                        <button
                            type="submit"
                            disabled={updateLoading}
                            className="w-full bg-[#D4AF37] text-black py-3 rounded-2xl font-semibold hover:scale-[1.02] duration-300"
                        >

                            {updateLoading
                                ? "Updating..."
                                : "Save Changes"}

                        </button>

                        {/* CANCEL */}
                        <button
                            type="button"
                            onClick={() => navigate("/profile")}
                            className="w-full border border-[#2a2a2a] py-3 rounded-2xl hover:border-[#D4AF37] hover:text-[#D4AF37] duration-300"
                        >

                            Cancel

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default EditProfile;