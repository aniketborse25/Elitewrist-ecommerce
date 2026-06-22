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

    const [profileImage, setProfileImage] = useState(null);

    const [updateLoading, setUpdateLoading] = useState(false);

    // LOAD USER DATA
    useEffect(() => {

        if (user) {

            setName(user?.name || "");

            setAddress(user?.address || "");

        }

    }, [user]);

    // LOADING
    if (loading) {

        return <Loader />;

    }

    // NOT LOGIN
    if (!user) {

        return <Navigate to="/login" />;

    }



    // UPDATE PROFILE
    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            setUpdateLoading(true);

            // FORM DATA

            const formData = new FormData();

            formData.append("name", name);

            formData.append("address", address);

            if (profileImage) {

                formData.append(
                    "profileImage",
                    profileImage
                );

            }
            // token 
            const res = await axios.put(
                "https://elitewrist-api.onrender.com/api/v1/admin/users/update-profile",
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            // UPDATE STORAGE
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

        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-6 py-10 md:py-16">

            {/* CARD */}
            <div className="w-full max-w-md bg-[#111] border border-[#222] rounded-[28px] md:rounded-[35px] p-6 sm:p-7 md:p-8 hover:border-[#D4AF37] duration-500">

                {/* TOP */}
                <div className="text-center mb-8">

                    <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-xs mb-4">

                        EliteWrist

                    </p>

                    <h1 className="text-2xl sm:text-3xl font-bold mb-3">

                        Edit Profile

                    </h1>

                    <p className="text-gray-500 text-sm md:text-base">

                        Update your personal information

                    </p>

                    {/* LINE */}
                    <div className="w-12 md:w-14 h-[2px] bg-[#D4AF37] mx-auto mt-5 md:mt-6 rounded-full"></div>

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
                            className="w-full bg-black border border-[#2a2a2a] rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#D4AF37] text-sm md:text-base"
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
                            className="w-full bg-black border border-[#2a2a2a] rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#D4AF37] text-sm md:text-base resize-none"
                            placeholder="Enter your address"
                        />

                    </div>

                    {/* PROFILE PHOTO */}
                    <div>

                        <label className="block mb-2 text-sm text-gray-400">

                            Profile Photo

                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setProfileImage(e.target.files[0])
                            }
                            className="w-full bg-black border border-[#2a2a2a] rounded-2xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-[#D4AF37] text-sm md:text-base"
                        />

                    </div>

                    {/* BUTTONS */}
                    <div className="space-y-4 pt-2">

                        {/* SAVE */}
                        <button
                            type="submit"
                            disabled={updateLoading}
                            className="w-full bg-[#D4AF37] text-black py-3 rounded-2xl font-semibold hover:scale-[1.02] duration-300 text-sm md:text-base"
                        >

                            {updateLoading
                                ? "Updating..."
                                : "Save Changes"}

                        </button>

                        {/* CANCEL */}
                        <button
                            type="button"
                            onClick={() => navigate("/profile")}
                            className="w-full border border-[#2a2a2a] py-3 rounded-2xl hover:border-[#D4AF37] hover:text-[#D4AF37] duration-300 text-sm md:text-base"
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