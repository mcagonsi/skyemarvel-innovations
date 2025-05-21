import { FaFacebookF } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import Image from "next/image";


export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#000523] text-white py-8">
            <div className="flex flex-wrap mx-auto justify-center my-6 gap-8 items-center">
                <div className="items-center">
                    <Image src="/footer_logo2.png" alt="Logo" width={400} height={200} className="mb-4" />
                </div>
                <div className="flex text-3xl flex-col justify-center mt-6 text-center gap-4">
                    <p className="block text-[16px]">Connect with us.</p>
                    <div className="flex text-3xl  mt-4 text-center gap-4">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="text-white hover:text-[#00CCFF] transition duration-300 ease-in-out" />
                        </a>
                        <a href="mailto:skyemarvelinnovations@gmail.com" target="_blank" title="Gmail" rel="noopener noreferrer">
                            <SiGmail className="text-white hover:text-[#00CCFF] transition duration-300 ease-in-out" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-white hover:text-[#00CCFF] transition duration-300 ease-in-out" />
                        </a>
                        <a href="tel:+17097645352" target="_blank" rel="noopener noreferrer">
                            <IoCall className="text-white hover:text-[#00CCFF] transition duration-300 ease-in-out" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaFacebookMessenger className="text-white hover:text-[#00CCFF] transition duration-300 ease-in-out" />
                        </a>
                    </div>
                    
                </div>
                
            </div>
            <div className="text-center mx-auto">
                <p className="text-sm  text-gray-500">©{currentYear} Skyemarvel Innovations. All rights reserved.</p>
                <p className="text-sm text-gray-500">Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    )
}