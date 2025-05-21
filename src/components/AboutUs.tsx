"use client";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa6";
import { GiHiveMind } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoIosTimer } from "react-icons/io";

const whyChooseUs = {
    "Impactful Design": {
        description: "Visually striking work tailored to deliver measurable results.",
        icon: <FaBrain className="text-white/50 mb-4 text-2xl" />,
    },
    "Audience-Focused": {
        description: "Every design is crafted with your users in mind to boost engagement.",
        icon: <GiHiveMind className="text-white/50 mb-4 text-2xl" />,
    },
    "Reliable & Adaptable": {
        description: "We’re easy to work with, quick to adapt, and always deliver on time.",
        icon: <IoIosTimer className="text-white/50 mb-4 text-2xl" />,
    },
    "Creative & Refined": {
        description: "We bring bold ideas to life with thoughtful, polished execution.",
        icon: <HiOutlineLightBulb className="text-white/50 mb-4 text-2xl" />,
    },
}

const WhoWeAre = () => {

    return (
        <div className="flex flex-col justify-start w-[90%] md:max-w-[30%] mx-auto text-center md:text-start overflow-hidden mt-[35%] md:mt-[5%]  bg-transparent">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }} className=" text-white font-bold text-3xl mb-8">Who We Are</motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }} className=" text-white/60 font-normal text-lg mb-4">
                At Skyemarvel Innovations, we build strong brand identities through thoughtful designs and digital creativity, helping brands stand out and thrive in a competitive world.
            </motion.p>
        </div>
    );
}

const WhyChooseUs = () => {
    return (
        <div className="w-[90%] md:max-w-[40%] mx-auto overflow-hidden text-center mt-[35%] md:mt-[5%] py-4 bg-transparent">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }} className="  text-white font-bold text-2xl mb-8">Why Choose Us</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
                {
                    Object.entries(whyChooseUs).map(([title, { description , icon}], i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            key={i + title}
                            className=" md:max-w-[250px] justify-start flex-shrink-0 m-1 p-4 rounded-lg hover:bg-transparent hover:border-white 
                            hover:border hover:shadow-white-md hover:shadow bg-white/5 backdrop-blur-sm mb-4 transition duration-600 ease-in-out"
                        >   
                            <div className="w-fit mx-auto md:item-start">{icon}</div>
                            
                            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                            <p className="text-sm   text-gray-400">{description}</p>
                        </motion.div>
                    ))
                }
            </div>
            
            
        </div>
    )
}
export default function AboutUs() {
    return (
        <div id="about" className="flex flex-wrap items-start justify-center w-full h-full ">
            <WhoWeAre />
            <WhyChooseUs />
        </div>
    )
}