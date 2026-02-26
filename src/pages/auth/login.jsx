import React, { useState } from "react";
import axios from "axios";
import img from "../../assets/welcome.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";
import { useAuthStore } from "./store";
import { jwtDecode } from "jwt-decode";
import { User } from "lucide-react";
// import { useAuthStore } from "../../store/useAuthStore";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const { login } = useAuthStore();

    const signupPath = location.pathname.replace("/login", "/signup");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://localhost:44312/api/Auth/login",
                {
                    email,
                    password,
                }
            );
            const token = response.data.token;
            const decodedUser = jwtDecode(token);
            localStorage.setItem("token", token);
            login(token, decodedUser);
            const role = decodedUser.Role.toLowerCase();
            navigate(`/${role}/dashboard`,{ replace: true });
        } catch (err) {
            console.error(err);
            setError("Invalid email or password");
        }
    };

    // console.log(User.);


    return (
        <div className="flex w-full h-screen">
            <div className="flex-1 flex justify-center items-center h-screen">
                <form
                    className="flex justify-center items-center w-full"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-2xl font-medium pb-4">
                            Get Started Now
                        </h1>

                        {error && (
                            <p className="text-red-500 text-sm mb-3">{error}</p>
                        )}

                        <label>Email</label>
                        <input
                            className="mb-3 border rounded px-2 py-2 w-full"
                            // type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Password</label>
                        <input
                            className="mb-3 border rounded px-2 py-2 w-full"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="w-full bg-[#3A5B22] text-white py-2 mt-4 rounded">
                            Login
                        </button>

                        <Link to={signupPath} className="block text-center mt-4">
                            Don’t have an account?
                            <span className="text-blue-600 ml-1">Sign Up</span>
                        </Link>
                    </div>
                </form>
            </div>

            <div className="flex-1 hidden md:block">
                <img src={img} alt="Login" className="w-full h-screen object-cover" />
            </div>
        </div>
    );
};