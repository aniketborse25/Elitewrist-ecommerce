import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    // REGISTER
    const handleRegister = async (e) => {

        e.preventDefault();

        const newUser = {

            name,
            email,
            password,
            role: "user",

        };

        try {

            setLoading(true);

            await axios.post(
                "https://elitewrist-api.onrender.com/api/v1/user/register",
                newUser
            );

            navigate("/login");

        }

        catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-black flex items-center justify-center px-4 md:px-6 py-10">

            <form
                onSubmit={handleRegister}
                className="bg-[#111] border border-gray-800 p-6 sm:p-8 md:p-10 rounded-[28px] md:rounded-[35px] w-full max-w-md"
            >

                {/* TITLE */}
                <div className="text-center mb-8 md:mb-10">

                    <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-xs mb-4">

                        EliteWrist

                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">

                        Create Account

                    </h2>

                    <p className="text-gray-500 text-sm md:text-base">

                        Join The Elite Luxury Experience

                    </p>

                </div>

                {/* NAME */}
                <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full bg-black border border-gray-700 px-4 md:px-5 py-3 md:py-4 mb-5 rounded-2xl text-white outline-none focus:border-[#D4AF37] text-sm md:text-base"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                {/* EMAIL */}
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full bg-black border border-gray-700 px-4 md:px-5 py-3 md:py-4 mb-5 rounded-2xl text-white outline-none focus:border-[#D4AF37] text-sm md:text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* PASSWORD */}
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full bg-black border border-gray-700 px-4 md:px-5 py-3 md:py-4 mb-6 rounded-2xl text-white outline-none focus:border-[#D4AF37] text-sm md:text-base"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {/* BUTTON */}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#D4AF37] text-black w-full py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-yellow-400 duration-300"
                >

                    {loading ? "Loading..." : "Register"}

                </button>

                {/* LOGIN */}
                <p className="text-gray-400 text-center mt-6 text-sm">

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="text-[#D4AF37] hover:underline"
                    >

                        Login

                    </Link>

                </p>

            </form>

        </div>

    );

};

export default Register;