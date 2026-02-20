import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/welcome.png";


export const StaffsignUp = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: userName,
            email: email,
            passwordHash: password
        };
        try {
            await axios.post(
                "https://localhost:44312/api/Auth/StaffSignUp",
                payload
            );
            alert("Registered successfully");
        } catch (err) {
            if (err.response && err.response.status === 400) {
                alert("User already exists");
            }
            else {
                alert("Something went wrong");
            }
        } finally {
            setUserName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/student/login")
        }
    };

    return (
        <div className="flex w-full h-screen">
            <div className="flex-1 flex justify-center items-center h-screen">
                <form
                    className="flex justify-center items-center w-full"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">

                        <h1 className="text-2xl font-medium pb-4 text-center md:text-left">
                            Get Started Now
                        </h1>

                        <label className="font-medium text-[15px]">Name</label>
                        <input
                            className="mb-3 border text-[13px] rounded px-2 py-2 w-full"
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />

                        <label className="font-medium text-[15px]">Email</label>
                        <input
                            className="mb-3 border text-[13px] rounded px-2 py-2 w-full"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium text-[15px]">Password</label>
                                <input
                                    className="border text-[13px] rounded px-2 py-2 w-full"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-medium text-[15px]">Confirm Password</label>
                                <input
                                    className="border text-[13px] rounded px-2 py-2 w-full"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <span className="text-red-600 text-[12px]">{error}</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#3A5B22] text-white font-bold py-2 rounded-lg"
                        >
                            Signup
                        </button>

                        <Link to={'/staff/login'} className="text-center text-sm mt-3">
                            Have an account?
                            <span className="text-blue-600 cursor-pointer ml-1">
                                Sign in
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
