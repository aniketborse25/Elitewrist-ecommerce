import { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import UserContext from "../../Context/UserContext";

const Login = () => {

    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    // HANDLE INPUT
    const handleChange = (e) => {

        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });

    };

    // LOGIN
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await axios.post(
                "https://elitewrist-api.onrender.com/api/v1/user/login",
                {
                    email: loginData.email,
                    password: loginData.password,
                }
            );

            const data = res.data;

            // SAVE USER
            localStorage.setItem(
                "userdata",
                JSON.stringify(data.user)
            );
            //token
            localStorage.setItem(
                "token",
                data.token
            );

            // CONTEXT
            setUser(data.user);

            // REDIRECT
            navigate("/");

        }

        catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Invalid Email or Password"
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-black flex items-center justify-center px-4 md:px-6 py-10">

            <div className="bg-[#111] border border-[#222] rounded-[28px] md:rounded-[35px] p-6 sm:p-8 md:p-10 w-full max-w-md">

                {/* TITLE */}
                <div className="text-center mb-8 md:mb-10">

                    <p className="text-[#D4AF37] uppercase tracking-[4px] md:tracking-[5px] text-[11px] md:text-xs mb-4">

                        EliteWrist

                    </p>

                    <h1 className="text-white text-3xl sm:text-4xl font-bold mb-3">

                        Welcome Back

                    </h1>

                    <p className="text-gray-500 text-sm md:text-base">

                        EliteWrist Member Access

                    </p>

                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 md:space-y-6"
                >

                    {/* EMAIL */}
                    <div>

                        <label className="block mb-2 text-sm text-gray-400">

                            Email Address

                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={loginData.email}
                            onChange={handleChange}
                            className="w-full bg-black border border-[#2a2a2a] rounded-2xl px-4 md:px-5 py-3 md:py-4 text-white outline-none focus:border-[#D4AF37] text-sm md:text-base"
                            required
                        />

                    </div>

                    {/* PASSWORD */}
                    <div>

                        <label className="block mb-2 text-sm text-gray-400">

                            Password

                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={loginData.password}
                            onChange={handleChange}
                            className="w-full bg-black border border-[#2a2a2a] rounded-2xl px-4 md:px-5 py-3 md:py-4 text-white outline-none focus:border-[#D4AF37] text-sm md:text-base"
                            required
                        />

                    </div>

                    {/* FORGOT PASSWORD */}
                    <div className="text-right">

                        <Link
                            to="/forgot-password"
                            className="text-sm text-gray-400 hover:text-[#D4AF37] duration-300"
                        >

                            Forgot Password?

                        </Link>

                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#D4AF37] text-black py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:opacity-90 duration-300"
                    >

                        {loading ? "Loading..." : "Login"}

                    </button>

                </form>

                {/* REGISTER */}
                <p className="text-gray-400 mt-7 md:mt-8 text-center text-sm">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="text-[#D4AF37] hover:underline"
                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

};

export default Login;