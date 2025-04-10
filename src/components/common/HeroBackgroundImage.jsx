"use client";
import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroBackgroundImage({ data }) {
    return (
        <>
            <div className="relative w-full h-[30rem] overflow-hidden  bg-gradient-to-r from-[#12002b] to-[#1a0033]">
                <Navbar />
                <Image src="/path" alt="Image" width={968} height={200} />

                {/* Dark Overlay (Optional) */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#12002b] to-[#1a0033] opacity-50 "></div>

                {/* Content */}
                <div className="relative  container mx-auto text-white text-center tracking-[1px] flex flex-col justify-center items-center">
                    <p className="px-4 py-2 rounded-full inline-block text-xs mb-4 border border-gray-400">
                        {data.para}
                    </p>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                        {data.heading}
                    </h1>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                        {data.heading2}
                    </h1>
                </div>
            </div>
        </>
    );
}
