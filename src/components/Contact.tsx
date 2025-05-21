"use client"
import { motion } from "framer-motion";
import { Input, Button } from "@/components/ui";
import { IoIosSend } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import SocialMedia from "./SocialMedia";


const DropUsAMessage = () => {
    return (
        <div className="flex flex-col justify-start w-[90%] md:max-w-[30%] mx-auto text-center md:text-start overflow-hidden mt-[35%] md:mt-[5%]  bg-transparent">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }} className=" text-white font-bold text-2xl mb-8"><IoIosSend className="inline-block mr-2" width={30} height={50}/>Drop Us A Message</motion.h2>
            <form className="flex flex-col w-full">

                <Input name="name" type='text' variant="default" placeholder="Your Name" className="mb-4" />
                <Input name='email' type='email' variant="default" placeholder="Your Email" className="mb-4" />
                <textarea name='message' placeholder="Your Message" className="mb-4 text-start align-text-top bg-white focus:outline-none rounded-sm p-3 text-black max-h-[300px] min-h-[250px]" />
                <Button variant="primary_filled" className="rounded-sm w-full">
                    Send Message</Button>

            </form>

            <h3 className="font-bold text-xl text-center my-8">Or</h3>
            <div className="flex flex-col justify-start items-start gap-4 ">
                <a href="https://api.whatsapp.com/send?phone=2348100000000" target="_blank" rel="noopener noreferrer" className="underline items-center text-white">
                    <BsWhatsapp className="text-white mb-4 mr-2 text-2xl inline-block" /> Send us a message on whatsapp
                </a>
                <a href="tel:+2348100000000" className="underline items-center text-white">
                    <IoCall className="text-white mb-4 mr-2 text-2xl inline-block" /> Call us now !
                </a>
            </div>

        </div>
    );
}

const WeConnectWithYou = () => {
    return (
        <div className="w-[90%] md:max-w-[30%] mx-auto overflow-hidden text-center mt-[35%] md:mt-[5%] py-4 bg-transparent">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }} className="  text-white font-bold text-xl mb-8">
                <MdContacts width={50} height={50} className="text-2xl inline-block mr-4"/>We&apos;ll connect with you !</motion.h2>
            
            <form className="flex flex-col w-full">
                <Input name="name" type='text' variant="underlined" placeholder="Your Name" className="mb-6" />
                <Input name='email' type='email' variant="underlined" placeholder="Your Email" className="mb-6" />
                <Input name='phone' type='tel' variant="underlined" placeholder="Your Phone Number" className="mb-6" />
                
                <Button variant="primary_outlined" className="rounded-sm mt-8 w-full">
                    Drop Your Contact</Button>
            </form>
            <div className="mx-auto w-fit "><SocialMedia /></div>
            
        </div>
    )
}


export default function Contact() {
    return (
        <div id="contact" className="flex flex-wrap items-start  mx-auto justify-center w-[90%] h-[90%] ">
            <DropUsAMessage />
            <WeConnectWithYou />
        </div>
    );
}