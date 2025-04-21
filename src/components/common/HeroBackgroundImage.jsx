"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import privcayImg from "../../../public/images/blog.png";
import Breadcrumb from "./Breadcrumb";

export default function HeroBackgroundImage({ data, img = privcayImg ,children}) {
  return (
    <div className="relative w-full h-[25rem] overflow-hidden">
      <Navbar />
      <Image
        src={img}
        alt="Image"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center text-white text-center px-4">
        <p className="px-4 py-2 rounded-full text-xs mb-4 border border-gray-400 backdrop-blur-sm bg-white/10">
          {data.para}
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-md">
          {data.heading}
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-md">
          {data.heading2}
        </h1>

        <div>
          {/* <Breadcrumb /> */}
          {children}
        </div>
      </div>
    </div>
  );
}
