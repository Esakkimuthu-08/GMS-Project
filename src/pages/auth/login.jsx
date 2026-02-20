import React, { useState } from "react";
import axios from "axios";
import img from "../../assets/welcome.png";
import { Link, useLocation } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();

    const signupPath = location.pathname.replace("/login", "/signup");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get(GetAllloginUsers);
            const user = res.data.find(
                (u) => u.email === email && u.password === password
            );
            if (user) {
                alert("Login successful");
            } else {
                alert("Invalid email or password");
            }
        } catch (err) {
            alert("Something went wrong");
        }
    };

    return (
        <div className="flex w-full h-screen">
            <div className="flex-1 flex justify-center items-center h-screen">
                <form
                    className="flex justify-center items-center w-full"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-2xl font-medium pb-4 text-center md:text-left">
                            Get Started Now
                        </h1>

                        <label className="font-medium text-[15px]">Email</label>
                        <input
                            className="mb-3 border text-[13px] rounded px-2 py-2 w-full"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label className="font-medium text-[15px]">Password</label>
                        <input
                            className="mb-3 border text-[13px] rounded px-2 py-2 w-full"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#3A5B22] text-white font-bold py-2 mt-4 rounded-lg"
                        >
                            Login
                        </button>

                        <Link
                            to={signupPath}
                            className="block text-center text-sm mt-4"
                        >
                            Don’t have an account?
                            <span className="text-blue-600 cursor-pointer ml-1">
                                Sign Up
                            </span>
                        </Link>
                    </div>
                </form>
            </div>

            <div className="flex-1 hidden md:block">
                <img
                    src={img}
                    alt="Login"
                    className="w-full h-screen object-cover"
                />
            </div>
        </div>
    );
};
