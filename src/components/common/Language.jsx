"use client";
import Image from "next/image";
import CommonButton from "./Button";
import WavePlayer from "./WavePlayer";
import audioPlayer from "../../../public/images/qcallAi/Ai voice/audio.png";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Language({ img, route }) {
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  return (
    <div className="relative py-12 flex items-center justify-center px-4 md:px-6">
      {/* Background Image (Using Next.js Image Component) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={img}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority // Loads image faster
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <span className="text-white text-xs border border-white px-3 py-1 rounded-full self-start">
              Speak their Language
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-4">
              QCall.ai Supports <br className="hidden md:block" />
              Multiple Languages
            </h2>
            <ul className="mt-4 space-y-2 text-white text-sm md:text-base">
              <li>
                Whether your audience speaks English, Spanish, Hindi, Gujarati,
                Bengali, Tamil, Kannada, Marathi, or more, QCall.ai handles
                conversations naturally in multiple languages.
              </li>
            </ul>
            <p className="mt-2 text-sm text-white max-w-sm">
              Need a custom voice or regional dialect? We'll train it
              specifically for you!
            </p>
            <div className="mt-6">
              <CommonButton
                title="Explore More Voices"
                className="bg-[#00a7e6] rounded-full text-white text-sm transition"
                />
            </div>
                {/* route="/explore-ai-voice" */}
          </div>

          {/* Right Section - Audio Players */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col space-y-4 md:space-y-6 items-center">
              {/* First Audio Player */}
              <div className="bg-white text-black p-3 rounded-lg flex flex-col items-center gap-3 w-full max-w-sm border border-gray-300">
                <div className="flex justify-between w-full">
                  <p className="font-semibold text-sm">Agent 1</p>
                  <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
                    Hindi
                  </div>
                </div>
                <div className="w-full">
                  <WavePlayer
                    audio={"/assets/eCommerce.wav"}
                    index={0}
                    currentPlayingIndex={currentPlayingIndex}
                    setCurrentPlayingIndex={setCurrentPlayingIndex}
                  />
                  {/* <Image
                                        src={audioPlayer}
                                        alt="Audio Player"
                                        width={350}
                                        height={50}
                                        className="w-full h-auto"
                                    /> */}
                </div>
              </div>

              {/* Second Audio Player - offset on larger screens */}
              <div className="bg-white text-black p-3 rounded-lg flex flex-col items-center gap-3 w-full max-w-sm border border-gray-300 md:self-end">
                <div className="flex justify-between w-full">
                  <p className="font-semibold text-sm">Agent 2</p>
                  <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
                    English
                  </div>
                </div>
                <div className="w-full">
                  <WavePlayer
                    audio={"/assets/eCommerce.wav"}
                    index={1}
                    currentPlayingIndex={currentPlayingIndex}
                    setCurrentPlayingIndex={setCurrentPlayingIndex}
                  />
                  {/* <Image
                                        src={audioPlayer}
                                        alt="Audio Player"
                                        width={350}
                                        height={50}
                                        className="w-full h-auto"
                                    /> */}
                </div>
              </div>

              {/* Third Audio Player */}
              <div className="bg-white text-black p-3 rounded-lg flex flex-col items-center gap-3 w-full max-w-sm border border-gray-300">
                <div className="flex justify-between w-full">
                  <p className="font-semibold text-sm">Agent 3</p>
                  <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
                    French
                  </div>
                </div>
                <div className="w-full">
                  <WavePlayer audio={"/assets/eCommerce.wav"} 
                  index={2}
                  currentPlayingIndex={currentPlayingIndex}
                  setCurrentPlayingIndex={setCurrentPlayingIndex}
                  />
                  {/* <Image
                                        src={audioPlayer}
                                        alt="Audio Player"
                                        width={350}
                                        height={50}
                                        className="w-full h-auto"
                                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
