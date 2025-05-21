import { FaFacebookF } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";


export default function SocialMedia() {
    return (
        <div className="flex text-3xl  mt-16 text-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-white hover:text-[#00CCFF] transition duration-300 ease-in-out" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <LuInstagram className="text-white hover:text-[#00CCFF] transition duration-300 ease-in-out" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-white hover:text-[#00CCFF] transition duration-300 ease-in-out" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookMessenger className="text-white hover:text-[#00CCFF] transition duration-300 ease-in-out" />
            </a>
        </div>
    )   
}