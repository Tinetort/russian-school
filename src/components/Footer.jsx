import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="w-full bg-[rgb(255,167,128)] p-4 fixed bottom-0 left-0 right-0 z-40">
            <div className="flex justify-between items-center mx-2 2xl:px-16">
                <p className="text-white">
                    © {new Date().getFullYear()} SD Russian School
                </p>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className="p-2 m-1 rounded-full bg-white shadow-lg cursor-pointer hover:scale-105 ease-in duration-75">
                            <Link
                                className="no-underline text-black"
                                href="tel:+1 (858) 779-4914"
                            >
                                <FaPhone size={20} />
                            </Link>
                        </div>
                        <div className="p-2 m-1 rounded-full bg-white shadow-lg cursor-pointer hover:scale-105 ease-in duration-75">
                            <Link
                                href="mailto:info@sdrussianschool.com"
                                className="no-underline text-black"
                            >
                                <IoMdMail size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
