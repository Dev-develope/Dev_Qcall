"use client";
import { usePathname } from "next/navigation";
import HeroCard from "./HeroCard";
import videoClip from "../../../public/videos/qcall2.mp4"
// import videoClip from "../../../public/videos/MicrosoftTeams-video.mp4"
// import videoClip from "../../../public/videos/herobackgroud.gif"
// import Qcallvideo from "../../../public/videos/Qcallai.mp4"
import Qcallvideo from "../../../public/videos/Qcall.ai+video.mp4"
import Navbar from "./Navbar";
import HelpCenterForm from "./HelpCenterForm";
import EnterpriseCard from "./EnterpriseCard";
import VideoPlayerLogo from "../../../public/images/playButton.png"
import Image from "next/image";
import { useRef, useState } from "react";
function Hero({ data, children, herocardData, className, videoPath, sampleData }) {

    const path = usePathname();
    const isHomePage = path === "/";
    const isBlogPage = path === "/blog";
    const isHelpCenter = path === "/helpcenter";
    const isEnterPrise = path === "/enterprise";
    const isPricing = path === "/pricing";
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <div className={`relative w-full min-h-[40rem] overflow-hidden bg-gradient-to-r from-[#12002b] to-[#1a0033]`}>
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={videoClip} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay (Optional) */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#12002b] to-[#1a0033] opacity-50"></div>

                {/* Content */}
                <Navbar />
                <div className="relative  container mx-auto text-white text-center tracking-[1px] flex flex-col justify-center items-center min-h-[40rem] px-4">
                    <p className="px-4 py-2 rounded-full inline-block text-xs mb-4 border border-gray-400">
                        {data?.heading}
                    </p>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                        {data?.h1}
                    </h1>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light mt-2">
                        {data?.h2}
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
                        {data?.para2}
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-xs">
                        {data?.para3}
                    </p>

                    {children} {/* Additional content like buttons */}
                </div>
            </div>

            {/* Hero Card Section */}
            {!isBlogPage ?
                <div className="container relative  mx-auto px-4 flex justify-center items-center mt-6 md:mt-[-8rem]">
                    {isHomePage ? (
                        <div className="relative h-[28rem] w-full sm:w-4/5 md:w-3/5 lg:w-2/3 flex justify-center items-center bg-white rounded-2xl shadow-lg p-4">
                            <video
                                onClick={handlePlayPause}
                                ref={videoRef}
                                loop
                                muted
                                className="w-full h-full object-cover rounded-2xl"
                            >
                                <source src={Qcallvideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Show play button only if video is not playing */}
                            {!isPlaying && (
                                <Image
                                    src={VideoPlayerLogo}
                                    alt="Play Video"
                                    width={150} // Adjust size as needed
                                    height={150}
                                    className="absolute inset-0 m-auto cursor-pointer  animate-pulse"
                                    onClick={handlePlayPause}
                                />
                            )}
                        </div>
                    ) : (
                        isHelpCenter ? <HelpCenterForm /> : isEnterPrise ? <EnterpriseCard /> : isPricing ? "" : <HeroCard herocardData={herocardData} className={className} sampleData={sampleData} />
                    )}
                </div> :
                ""
            }
        </>
    );
}

export default Hero;
