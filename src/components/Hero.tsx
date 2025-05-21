import { Button } from "@/components/ui";
import NextLink from "next/link"

export default function Hero() {
    return (
        <section className=" z-10 flex flex-col justify-center h-full mb-[50%] md:mb-[10%] mt-[25%] md:mt-[8%] px-4 md:px-[64px] text-white max-w-[800px]">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="block">Bold Ideas.</span>
                <span className="block ">Beautifully Executed.</span>
                <span className="block text-[#00CCFF] ">Excellently Delivered.</span>
            </h1>
            <p className="text-lg mb-4 md:text-xl">
                At SkyeMarvel, we transform visionary concepts into stunning digital realities that engage, inspire, and perform.
            </p>
            <div className="flex flex-wrap mt-4 gap-4 md:gap-[10%] md:pl-4">
                <NextLink href="/#contact" passHref>
                    <Button variant="primary_filled" className="rounded-sm md:scale-120">
                        Let&apos;s Build Together
                    </Button>
                </NextLink>
                <NextLink href="/#services" passHref>
                    <Button variant="secondary_filled" className="rounded-sm md:scale-120">
                        What We Do
                    </Button>
                </NextLink>
            </div>
        </section>
    )
}