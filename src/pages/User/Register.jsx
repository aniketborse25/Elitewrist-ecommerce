import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

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

            await axios.post(
                "https://elitewrist-api.onrender.com/api/v1/user/register",
                newUser
            );

            navigate("/login");

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-black flex items-center justify-center px-6">

            <form
                onSubmit={handleRegister}
                className="bg-[#111] border border-gray-800 p-10 rounded-3xl w-full max-w-md"
            >

                <h2 className="text-4xl font-bold mb-8 text-center text-white">

                    Register

                </h2>

                {/* NAME */}
                <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full bg-black border border-gray-700 p-4 mb-5 rounded-xl text-white outline-none focus:border-[#D4AF37]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                {/* EMAIL */}
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full bg-black border border-gray-700 p-4 mb-5 rounded-xl text-white outline-none focus:border-[#D4AF37]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* PASSWORD */}
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full bg-black border border-gray-700 p-4 mb-5 rounded-xl text-white outline-none focus:border-[#D4AF37]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {/* BUTTON */}
                <button className="bg-[#D4AF37] text-black w-full py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 duration-300">

                    Register

                </button>

                <p className="text-gray-400 text-center mt-5">

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="text-[#D4AF37]"
                    >

                        Login

                    </Link>

                </p>

            </form>

        </div>

    );
};

export default Register;