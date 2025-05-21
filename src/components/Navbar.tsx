"use client"
import { Link } from "@/components/ui";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import NextLink from "next/link";

export default function Navbar() {

    const [showDropDown, setshowDropDown] = useState(false);
    return (
        <div className="flex flex-col">
            {/* // desktop nav */}
            <div className="justify-between hidden md:flex items-center px-[64px] py-[16px] bg-transparent">
                <div className="text-white w-fit text-lg font-bold">
                    <NextLink href='/ '><Image src="/Logo.png" alt="Logo" width={50} height={50} className="inline-block mr-2" /></NextLink>
                </div>
                <nav className="flex w-[30%] mx-auto flex-row gap-[30%]">
                    <Link href="/#services" variant="primary_text" className="text-white mx-auto ">Services</Link>
                    <Link href="/#about" variant="primary_text" className="text-white mx-auto ">About</Link>
                    <Link href="/#contact" variant="primary_text" className="text-white mx-auto ">Contact</Link>
                </nav>
                <Link className="rounded-sm align-end" variant="secondary_filled" href="#">Get A Quote</Link>
            </div>

            {/* // mobile nav */}
            <div className="md:hidden items-center bg-[#000523]">

                <div className="flex justify-between px-[16px] py-[16px]   items-center text-white">
                    <div className="flex items-center">
                        <Image src="/Logo.png" alt="Logo" width={50} height={50} className=" mr-2" />
                    </div>
                    <span className="text-lg text-[#00CCFF]" >Skye<span className="text-[#F62378]">Marvel</span> Innovations</span>
                    {showDropDown ? <HiOutlineX onClick={() => setshowDropDown((prev) => !prev)} className='w-[35px] h-[35px]' /> :
                        <IoIosMenu onClick={() => setshowDropDown((prev) => !prev)} className='w-[35px] h-[35px]' />}


                </div>


                <div className={showDropDown ? "block transition duration-300 ease-in-out" : "hidden transition duration-300 ease-out"}>
                    <nav className="w-full  mx-auto flex flex-col ">
                        <Link href="/#services" variant="primary_text" onClick={() => setshowDropDown((prev) => !prev)} className="text-white mx-auto ">Services</Link>
                        <Link href="/#about" variant="primary_text" onClick={() => setshowDropDown((prev) => !prev)} className="text-white mx-auto ">About</Link>
                        <Link href="/#contact" variant="primary_text" onClick={() => setshowDropDown((prev) => !prev)} className="text-white mx-auto">Contact</Link>
                    </nav>
                    <Link className="block w-full text-center" onClick={() => setshowDropDown((prev) => !prev)} variant="secondary_filled" href="#">Get A Quote</Link>
                </div>
            </div>


        </div>
    )
}