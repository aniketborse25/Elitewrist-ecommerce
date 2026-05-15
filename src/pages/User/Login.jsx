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

            const res = await axios.post(
                "https://elitewrist-api.onrender.com/api/v1/user/login",
                {
                    email: loginData.email,
                    password: loginData.password,
                }
            );

            console.log("loggin data:", res.data);

            // API RESPONSE
            const data = res.data;

            // SAVE USER IN LOCAL STORAGE
            localStorage.setItem(
                "userdata",
                JSON.stringify(data)
            );
            // SAVE USER IN CONTEXT
            setUser(data);



            // REDIRECT
            navigate("/");

        }

        catch (error) {

            console.log(error);

            alert("Invalid Email or Password");

        }

    };

    return (

        <div className="min-h-screen bg-black flex items-center justify-center px-6">

            <div className="bg-[#111] border border-gray-800 rounded-3xl p-10 w-full max-w-md">

                {/* TITLE */}
                <h1 className="text-white text-4xl font-bold text-center mb-8">

                    Login

                </h1>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    {/* EMAIL */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={loginData.email}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
                        required
                    />

                    {/* PASSWORD */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-[#D4AF37]"
                        required
                    />

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 duration-300"
                    >

                        Login

                    </button>

                </form>

                {/* REGISTER */}
                <p className="text-gray-400 mt-6 text-center">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="text-[#D4AF37]"
                    >

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

};

export default Login;