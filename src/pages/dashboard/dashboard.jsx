import React from "react";
import { useState, useEffect } from "react";
import StarCards from "./star-card";



export const Dashboard = () => {
    const [userDetails, setUserDetails] = useState({})
    useEffect(() => {
        const userDetail = sessionStorage.getItem('user')
        setUserDetails(JSON.parse(userDetail));
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        window.location.reload()
    }
    return (
        <div className="">
            <div className="flex justify-between my-8">
                <div className=" flex flex-col h-full justify-center my-auto mx-0 ">
                    <h1 className=" font-semibold text-[22px] pb-1">Admin Dashboard</h1>
                    <p className=" font-medium text-gray-600 text-[12px] ">Welcome to Grievence Management system</p>
                </div>
                <div className='border w-[15%]  px-1 py-1 rounded-lg hidden md:block'>
                    <div className='flex gap-3 justify-evenly items-center'>
                        <div>
                            <img className='rounded-full h-8 w-8' src="https://github.com/shadcn.png" alt="@shadcn" />
                        </div>
                        <div className='flex flex-col text-[12px]'>
                            <div className=' flex gap-1 justify-between'>
                                <span>ID</span>
                                :
                                <span>{userDetails.id}</span>
                            </div>
                            <div className=' flex gap-1 justify-between'>
                                <span>
                                    NAME
                                </span>
                                :
                                <span> {userDetails.username}</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleLogout} className='text-[#FCFAFA] w-full mt-1 bg-blue-400 py-1 mx-auto my-0 rounded-md text-[12px]  hover:bg-blue-600 '>Log out</button>
                </div>
            </div>

            <StarCards />
        </div>
    )
}