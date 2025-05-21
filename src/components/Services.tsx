"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = {
    "UI/UX Design & Web Development": {
        description: "Smart, user-focused designs, responsive and high performing websites tailored for your needs.",
        image: "/services/software_web_dev.png",
    },
    "Brand Identity Design": {
        description: "Logos, typography, and cohesive visual elements for your brand.",
        image: "/services/brand_identity.png",
    },
    "Mobile App Development": {
        description: "Sleek, user--friendly designs and functional mobile apps built for performance.",
        image: "/services/mobile_design.png",
    },
    "Marketing & Promotions Design": {
        description: "Fliers, posters, and social media graphics that get attention and drive action.",
        image: "/services/marketing.png",
    },
};

export default function Services() {
    return (
        <div id='services' className="relative w-[92%] mx-auto overflow-hidden mt-[35%] mb-[10%] md:mt-[5%] py-8 bg-transparent">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay:0.8 }}   className="text-center text-white font-bold text-3xl mb-8">Our Services</motion.h2>
            <motion.div
                className="flex pt-8 gap-8 w-max"
                initial={{ x: "0%" }}
                whileInView={{ x: "-50%" }}
                // animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 30,
                    repeat: Infinity,
                }}
            >
                {Object.entries(services)
                    .concat(Object.entries(services))
                    .map(([title, { description, image }], i) => (
                        <div
                            key={i + title}
                            className="max-w-[300px] md:min-w-lg justify-start flex-shrink-0 p-8 rounded-lg bg-white/5 backdrop-blur-sm"
                        >
                            <Image
                                src={image}
                                alt={title}
                                width={350}
                                height={350}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-white text-start font-bold text-lg">{title}</h3>
                            <p className="text-sm  text-start text-gray-300">{description}</p>
                        </div>
                    ))}
            </motion.div>
        </div>
    );
}
