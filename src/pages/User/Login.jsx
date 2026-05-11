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

            const res = await axios.get(
                `http://localhost:3000/users?email=${loginData.email}`
            );

            const data = res.data;

            // VALID USER
            if (
                data.length > 0 &&
                data[0].password === loginData.password
            ) {

                localStorage.setItem(
                    "userdata",
                    JSON.stringify(data[0])
                );

                setUser(data[0]);

                navigate("/");

            }

            else {

                alert("Invalid Email or Password");

            }

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-black flex items-center justify-center px-6">

            <div className="bg-[#111] border border-gray-800 rounded-3xl p-10 w-full max-w-md">

                <h1 className="text-white text-4xl font-bold text-center mb-8">

                    Login

                </h1>

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