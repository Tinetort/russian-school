import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
    return (
        <div className="w-full bg-[rgb(255,167,128)] p-4 fixed bottom-0 left-0 right-0 z-40">
            <div className="flex justify-between items-center mx-2 2xl:px-16">
                <div className="flex items-center">
                    <p className="text-white mr-4">Footer Content</p>
                    <div className="flex items-center">
                        <div className="p-2 m-1 rounded-full bg-white shadow-lg cursor-pointer hover:scale-105 ease-in duration-75">
                            <FaPhone size={20} />
                        </div>
                        <div className="p-2 m-1 rounded-full bg-white shadow-lg cursor-pointer hover:scale-105 ease-in duration-75">
                            <IoMdMail size={20} />
                        </div>
                    </div>
                </div>
                <p className="text-white">
                    © {new Date().getFullYear()} Your School
                </p>
            </div>
        </div>
    )
}

export default Footer
