import React from 'react'
import { LuTicket } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { GoIssueClosed } from "react-icons/go";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoReload } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

function StarCards() {
    return (
        <div className="grid grid-cols-4 gap-5 w-[95%] mx-auto my-0">
            <div className=" flex justify-between  hover:shadow-xl  transition-transform duration-500 ease-out hover:-translate-y-1 w-[95%] shadow-lg items-center px-3  border-l-4 rounded-l-2xl border-l-blue-700 rounded-lg h-[95px] ">
                <div className=" font-medium text-gray-500 text-[14px]">
                    <p>Total Ticket</p>
                    <p className="text-black">7</p>
                </div>
                <div className=" bg-blue-300 rounded-md px-2 py-2">
                    <LuTicket size={25} />
                </div>
            </div>
            <div className=" flex justify-between  hover:shadow-xl  transition-transform duration-500 ease-out hover:-translate-y-1 w-[95%] shadow-lg items-center  px-3  border-l-4 rounded-l-2xl border-l-orange-600 rounded-lg h-[95px] ">
                <div className=" font-medium text-gray-500 text-[14px]">
                    <p>In-Process</p>
                    <p className="text-black">7</p>
                </div>
                <div className=" bg-orange-300 rounded-md px-2 py-2">
                    <LuClock size={25} />
                </div>
            </div>
            <div className=" flex justify-between  hover:shadow-xl  transition-transform duration-500 ease-out hover:-translate-y-1 w-[95%] shadow-lg items-center  px-3  border-l-4 rounded-l-2xl border-l-green-600 rounded-lg h-[95px] ">
                <div className=" font-medium text-gray-500 text-[14px]">
                    <p>closed</p>
                    <p className="text-black">7</p>
                </div>
                <div className=" bg-green-300 rounded-md px-2 py-2">
                    <GoIssueClosed size={25} />
                </div>
            </div>
            <div className=" flex justify-between  hover:shadow-xl  transition-transform duration-500 ease-out hover:-translate-y-1 w-[95%] shadow-lg items-center  px-3  border-l-4 rounded-l-2xl border-l-purple-700 rounded-lg h-[95px] ">
                <div className=" font-medium text-gray-500 text-[14px]">
                    <p>Newly Raised</p>
                    <p className="text-black">7</p>
                </div>
                <div className=" bg-purple-300 rounded-md px-2 py-2">
                    <IoAnalyticsOutline size={25} />
                </div>
            </div>
            <div className=" flex justify-between  hover:shadow-xl  transition-transform duration-500 ease-out hover:-translate-y-1 w-[95%]   shadow-lg items-center px-3  border-l-4 rounded-l-2xl border-l-blue-900 rounded-lg h-[95px] ">
                <div className=" font-medium text-gray-500 text-[14px]">
                    <p>Assigned Ticket</p>
                    <p className="text-black">7</p>
                </div>
                <div className=" bg-gray-300 rounded-md px-2 py-2">
                    <FaRegPaperPlane size={25} />
                </div>
            </div>
            <div className=" flex justify-between  hover:shadow-xl  transition-transform duration-500 ease-out hover:-translate-y-1 w-[95%] shadow-lg items-center  px-3  border-l-4 rounded-l-2xl border-l-yellow-600 rounded-lg h-[95px] ">
                <div className=" font-medium text-gray-500 text-[14px]">
                    <p>Pending from Department</p>
                    <p className="text-black">7</p>
                </div>
                <div className=" bg-yellow-300 rounded-md px-2 py-2">
                    <GoArrowSwitch size={25} />
                </div>
            </div>
            <div className=" flex justify-between  hover:shadow-xl  transition-transform duration-500 ease-out hover:-translate-y-1 w-[95%] shadow-lg items-center  px-3  border-l-4 rounded-l-2xl border-l-red-700 rounded-lg h-[95px] ">
                <div className=" font-medium text-gray-500 text-[14px]">
                    <p>Reopened Tickets</p>
                    <p className="text-black">7</p>
                </div>
                <div className=" bg-red-300 rounded-md px-2 py-2">
                    <IoReload size={25} />
                </div>
            </div>
            <div className=" flex justify-between  hover:shadow-xl  transition-transform duration-500 ease-out hover:-translate-y-1 w-[95%] shadow-lg items-center  px-3  border-l-4 rounded-l-2xl border-l-black rounded-lg h-[95px] ">
                <div className=" font-medium text-gray-500 text-[14px]">
                    <p>Raised Today</p>
                    <p className="text-black">7</p>
                </div>
                <div className=" bg-gray-400 rounded-md px-2 py-2" >
                    <SlCalender size={25} />
                </div>
            </div>
        </div>
    )
}

export default StarCards
