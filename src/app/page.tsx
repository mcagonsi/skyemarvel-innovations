
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <div className="before:bg-black fixed top-0 left-0 w-full h-screen -z-20 overflow-hidden md:flex  hidden">

        <video
          className="w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline />

      </div>
      
      <div>
        <Image src="/hero.jpg" alt="hero" width={500} height={500} className="md:hidden w-full h-screen object-cover fixed top-0 left-0 -z-20" />
      </div>
      <div className="fixed top-0 left-0 h-screen inset-0 bg-gradient-to-r from-[#000523]/100  via-[#000523]/97 to-[#000523]/85 -z-10"></div>

      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
      
    </>


  );
}
