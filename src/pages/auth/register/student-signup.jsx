import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/welcome.png";
import axios from "axios";

export const StudentSignup = () => {
    const navigate = useNavigate()
    const [rollNo, setRollNo] = useState('');
    const [userName, setUserName] = useState('');
    const [staffNo, setStaffNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const payload = {
            rollNo: rollNo,
            name: userName,
            email: email,
            passwordHash: password,
            staffCode: staffNo
        };

        try {
            const res = await axios.post(
                "https://localhost:44312/api/Auth/Student-SignUp",
                payload
            );

            alert("Registered successfully");
        } catch (err) {
            if (err.response) {
                if (err.response.status === 400) {
                    setError("User already exists");
                } else {
                    setError(err.response.data?.message || "Server error");
                }
            } else {
                setError("Network error. Try again later.");
            }
        } finally {
            setRollNo("");
            setUserName("");
            setStaffNo("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/student/login")
        }
    };



    return (
        <div className="flex w-full h-screen">
            <div className="flex-1 flex justify-center items-center h-screen">
                <form className="flex justify-center items-center w-full" onSubmit={handleSubmit}>
                    <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-4">

                        <h1 className="text-2xl font-medium pb-4 text-center md:text-left">
                            Get Started Now
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-[15px]">Roll No</label>
                                <input
                                    className="border text-[13px] rounded px-2 py-2"
                                    type="text"
                                    required
                                    value={rollNo}
                                    onChange={(e) => setRollNo(e.target.value)}
                                    placeholder="Enter Your Roll No"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-[15px]">Name</label>
                                <input
                                    className="border text-[13px] rounded px-2 py-2"
                                    type="text"
                                    required
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    placeholder="Enter Your Name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-[15px]">Staff Code</label>
                                <input
                                    className="border text-[13px] rounded px-2 py-2"
                                    type="text"
                                    required
                                    value={staffNo}
                                    onChange={(e) => setStaffNo(e.target.value)}
                                    placeholder="Enter Your Staff Code"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-[15px]">Email</label>
                                <input
                                    className="border text-[13px] rounded px-2 py-2"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-[15px]">Password</label>
                                <input
                                    className="border text-[13px] rounded px-2 py-2"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter Password"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-[15px]">Confirm Password</label>
                                <input
                                    className="border text-[13px] rounded px-2 py-2"
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                />
                                <span className=" text-red-700">{error}</span>
                            </div>
                        </div>

                        <label className="flex text-[13px] items-center my-4">
                            <input type="checkbox" className="mr-2" required />
                            I agree to the terms & policy
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-[#3A5B22] text-white font-bold py-2 rounded-lg"
                        >
                            Signup
                        </button>

                        <Link to={'/student/login'} className="text-center text-sm mt-3">
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
    )
};

