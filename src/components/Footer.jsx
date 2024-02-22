import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-[rgb(255,167,128)] p-4">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                <p className="text-white">
                    © {new Date().getFullYear()} SD Russian School
                </p>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className="p-2 m-1 rounded-full bg-white shadow-lg cursor-pointer hover:scale-105 ease-in duration-75">
                            <Link href="tel:+1 (858) 779-4914">
                                <FaPhone size={20} className="no-underline text-black" />
                            </Link>
                        </div>
                        <div className="p-2 m-1 rounded-full bg-white shadow-lg cursor-pointer hover:scale-105 ease-in duration-75">
                            <Link href="mailto:info@sdrussianschool.com">
                                <IoMdMail size={20} className="no-underline text-black" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
