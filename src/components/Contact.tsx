"use client"
import { motion } from "framer-motion";
import { Input, Button } from "@/components/ui";
import { IoIosSend } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import SocialMedia from "./SocialMedia";
import { useState } from "react";


function Modal({ message, onClose }: { message: string; onClose: () => void }) {
    return (
        <div className="fixed inset-1 z-50 flex items-center justify-center bg-opacity-20">
            <div className="bg-white p-6 rounded-md shadow-xl max-w-md w-full relative">
                <h2 className="text-xl text-black font-semibold mb-2">Thank You!</h2>
                <p className="text-gray-700 mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl leading-none"
                >
                    &times;
                </button>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
}



const DropUsAMessage = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        try {
            const res = await fetch('/api/message', {
                method: 'POST',
                body: formData,
            });

            const resData = await res.json();
            if (!res.ok) {
                throw new Error(resData?.message || "Something went wrong");
            }
            setModalMessage("I will be in contact with you as soon as possible!");
            form.reset();
        } catch (err) {
            console.error("Error sending email:", err);
            setModalMessage("Failed to send your message. Please try again later.");
        }

        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000); // Close modal after 3 seconds
    };
    return (
        <div className="flex flex-col justify-start w-[90%] md:max-w-[30%] mx-auto text-center md:text-start overflow-hidden mt-[35%] md:mt-[5%]  bg-transparent">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }} className=" text-white font-bold text-2xl mb-8"><IoIosSend className="inline-block mr-2" width={30} height={50}/>Drop Us A Message</motion.h2>
            <form onSubmit={handleSubmit} className="flex flex-col w-full">

                <Input name="name" type='text' variant="default" placeholder="Your Name" className="mb-4"  required/>
                <Input name='email' type='email' variant="default" placeholder="Your Email" className="mb-4"  required/>
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

            {/* Modal */}
            {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}

        </div>
    );
}

const WeConnectWithYou = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        try {
            const res = await fetch('/api/connect', {
                method: 'POST',
                body: formData,
            });

            const resData = await res.json();
            if (!res.ok) {
                throw new Error(resData?.message || "Something went wrong");
            }
            setModalMessage("I will be in contact with you as soon as possible!");
            form.reset();
        } catch (err) {
            console.error("Error sending email:", err);
            setModalMessage("Failed to send your message. Please try again later.");
        }

        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000); // Close modal after 3 seconds
    };
    return (
        <div className="w-[90%] md:max-w-[30%] mx-auto overflow-hidden text-center mt-[35%] md:mt-[5%] py-4 bg-transparent">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }} className="  text-white font-bold text-xl mb-8">
                <MdContacts width={50} height={50} className="text-2xl inline-block mr-4"/>We&apos;ll connect with you !</motion.h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <Input name="name" type='text' variant="underlined" placeholder="Your Name" className="mb-6"  required/>
                <Input name='email' type='email' variant="underlined" placeholder="Your Email" className="mb-6"  required/>
                <Input name='phone' type='tel' variant="underlined" placeholder="Your Phone Number" className="mb-6"  required/>
                
                <Button variant="primary_outlined" className="rounded-sm mt-8 w-full">
                    Drop Your Contact</Button>
            </form>
            <div className="mx-auto w-fit "><SocialMedia /></div>
            {/* Modal */}
            {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
            
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