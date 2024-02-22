'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/app/schoolLogo-removebg-preview.png'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaPhone } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const closeMenu = () => {
        setNav(false)
    }

    return (
        <div className="w-full h-20 bg-[rgba(178,223,239,0.9)] border-2 border-b-red-700 shadow-gray-400 p-2">
            <div className="flex justify-around items-center h-full w-full mx-2 2xl:px-16">
                <Image src={logo} alt="logo-png" width={120} />
                <div>
                    <ul className="hidden md:flex">
                        <li className="ml-10 text-sm uppercase">
                            <Link
                                className="no-underline text-black"
                                href="/"
                                onClick={closeMenu}
                            >
                                Homepage
                            </Link>
                        </li>
                        <li className="ml-10 text-sm  uppercase">
                            <Link
                                className="no-underline text-black"
                                href="/about"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className="ml-10 text-sm  uppercase">
                            <Link
                                className="no-underline text-black"
                                href="/registration"
                                onClick={closeMenu}
                            >
                                Registration
                            </Link>
                        </li>
                        <li className="ml-10 text-sm no-underline uppercase">
                            <Link
                                className="no-underline text-black"
                                href="/homework"
                                onClick={closeMenu}
                            >
                                Homework
                            </Link>
                        </li>
                        <li className="ml-10 text-sm uppercase mr-3">
                            <Link
                                className="no-underline text-black"
                                href="/contact"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div
                        onClick={handleNav}
                        className="md:hidden cursor-pointer mr-3"
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50'
                        : ''
                }
            >
                <div
                    className={
                        nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div className="flex w-full items-center justify-between">
                        <Image src={logo} alt="logo-png" width={65} />
                        <div
                            onClick={handleNav}
                            className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="flex items-center flex-col">
                        <ul className="uppercase flex flex-col items-center">
                            <li className="py-4 text-sm">
                                <Link
                                    className="no-underline text-black"
                                    href="/"
                                    onClick={closeMenu}
                                >
                                    Homepage
                                </Link>
                            </li>
                            <li className="py-4 text-sm">
                                <Link
                                    className="no-underline text-black"
                                    href="/about"
                                    onClick={closeMenu}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="py-4 text-sm">
                                <Link
                                    className="no-underline text-black"
                                    href="/registration"
                                    onClick={closeMenu}
                                >
                                    Registration
                                </Link>
                            </li>
                            <li className="py-4 text-sm">
                                <Link
                                    className="no-underline text-black"
                                    href="/homework"
                                    onClick={closeMenu}
                                >
                                    Homework
                                </Link>
                            </li>
                            <li className="py-4 text-sm">
                                <Link
                                    className="no-underline text-black"
                                    href="/contact"
                                    onClick={closeMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="pt-30">
                            <p className="uppercase tracking-widest text-black">
                                Let's Connect
                            </p>
                        </div>
                        <div className="flex items-center justify-center sm:w-[80%] md:w-[65%]">
                            <div className="p-2 m-1 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-75">
                                <Link href="tel:+1 (858) 779-4914">
                                    <FaPhone
                                        className="no-underline text-black"
                                        size={20}
                                    />
                                </Link>
                            </div>
                            <div className="p-2 m-1 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-75">
                                <Link href="mailto:info@sdrussianschool.com">
                                    <IoMdMail
                                        className="no-underline text-black"
                                        size={20}
                                    />
                                </Link>
                            </div>
                            <div className="p-2 m-1 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-75">
                                <Link href="https://www.facebook.com/SanDiegoRussianSchool">
                                    <FaFacebook
                                        className="no-underline text-black"
                                        size={20}
                                    />
                                </Link>
                            </div>
                            <div className="p-2 m-1 rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-75">
                                <Link href="https://www.instagram.com/sdrussianschool/">
                                    <AiFillInstagram
                                        className="no-underline text-black"
                                        size={20}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
