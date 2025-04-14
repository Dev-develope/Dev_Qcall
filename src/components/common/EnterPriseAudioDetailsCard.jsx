"use client"
import React, { useState } from "react";
import enterPrise1 from "../../../public/images/8EnterpriseSolution/enterPrise1.png";
import enterPrise2 from "../../../public/images/8EnterpriseSolution/enterPrise2.png";
import enterPrise3 from "../../../public/images/8EnterpriseSolution/enterPrise3.png";
import {
    enterPriseDataA,
    enterPriseDataB,
    enterPriseDataC
  } from "src/constants/ai_contact_center";
import WavePlayer from "./WavePlayer";
import Image from "next/image";
import listLogoImg from "../../../public/images/listlogo.png";
const EnterPriseAudioDetailsCard = () => {
      const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  return <>
  <div className="container mx-auto p-4 flex justify-center items-center">
      <div className="space-y-10 max-w-4xl">
        {enterPriseDataA.map((card, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 bg-white p-6 rounded-xl"
          >
            {/* Left: Text Content */}
            <div className="flex justify-center">
              <Image
                src={enterPrise1}
                alt="Chat AI"
                width={400}
                height={250}
                className="rounded-xl border border-gray-200 shadow object-contain p-2"
              />
            </div>
            <div className="space-y-4">
              <span className="text-xs px-3 py-1 rounded-full border border-[#00a7e6] inline-block w-fit">
                {card.span}
              </span>

              <h2 className="text-2xl font-bold text-gray-800">
                {card.h1}
              </h2>

              {card.para && (
                <p className="text-sm text-gray-700">{card.para}</p>
              )}

              <ul className="space-y-2 text-gray-600 text-sm">
                {card.list.map((item, listIndex) => (
                  <li key={listIndex} className="flex items-start">
                    <Image
                      src={listLogoImg}
                      alt="Icon"
                      height={10}
                      width={10}
                      className="mr-3 mt-1"
                    />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {card?.playeradd && (
                <div className="mt-2 w-full max-w-sm">
                  <WavePlayer audio={card.playeradd} 
                   index={0}
                   currentPlayingIndex={currentPlayingIndex}
                   setCurrentPlayingIndex={setCurrentPlayingIndex}
                  />
                </div>
              )}
            </div>

            {/* Right: Image */}
            
          </div>
        ))}
      </div>
    </div>


    {/* cardB */}
    <div className="container mx-auto p-4 flex justify-center items-center">
      <div className="space-y-10 max-w-4xl">
        {enterPriseDataB.map((card, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 bg-white p-6 rounded-xl"
          >
            {/* Left: Text Content */}
            <div className="order-2 md:order-1 space-y-4">
              <span className="text-xs px-3 py-1 rounded-full border border-[#00a7e6] inline-block w-fit">
                {card.span}
              </span>

              <h2 className="text-2xl font-bold text-gray-800">
                {card.h1}
              </h2>

              {card.para && (
                <p className="text-sm text-gray-700">{card.para}</p>
              )}

              <ul className="space-y-2 text-gray-600 text-sm">
                {card.list.map((item, listIndex) => (
                  <li key={listIndex} className="flex items-start">
                    <Image
                      src={listLogoImg}
                      alt="Bullet"
                      height={10}
                      width={10}
                      className="mr-3 mt-1"
                    />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {card?.playeradd && (
                 <div className="mt-2 w-full max-w-sm">
                 <WavePlayer audio={card.playeradd} 
                  index={1}
                  currentPlayingIndex={currentPlayingIndex}
                  setCurrentPlayingIndex={setCurrentPlayingIndex}
                 />
               </div>
              )}
            </div>

            {/* Right: Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src={enterPrise2}
                alt="Chat AI"
                width={400}
                height={250}
                className="rounded-xl border border-gray-200 shadow-md object-contain p-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>


    {/* cardC */}

    <div className="container mx-auto p-4 flex justify-center items-center">
      <div className="space-y-10 max-w-4xl">
        {enterPriseDataC.map((card, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 bg-white p-6 rounded-xl"
          >
            {/* Left: Text Content */}
            <div className="flex justify-center">
              <Image
                src={enterPrise3}
                alt="Chat AI"
                width={400}
                height={250}
                className="rounded-xl border border-gray-200 shadow object-contain p-2"
              />
            </div>
            <div className="space-y-4">
              <span className="text-xs px-3 py-1 rounded-full border border-[#00a7e6] inline-block w-fit">
                {card.span}
              </span>

              <h2 className="text-2xl font-bold text-gray-800">
                {card.h1}
              </h2>

              {card.para && (
                <p className="text-sm text-gray-700">{card.para}</p>
              )}

              <ul className="space-y-2 text-gray-600 text-sm">
                {card.list.map((item, listIndex) => (
                  <li key={listIndex} className="flex items-start">
                    <Image
                      src={listLogoImg}
                      alt="Icon"
                      height={10}
                      width={10}
                      className="mr-3 mt-1"
                    />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {card?.playeradd && (
                 <div className="mt-2 w-full max-w-sm">
                 <WavePlayer audio={card.playeradd} 
                  index={2}
                  currentPlayingIndex={currentPlayingIndex}
                  setCurrentPlayingIndex={setCurrentPlayingIndex}
                 />
               </div>
              )}
            </div>

            {/* Right: Image */}
            
          </div>
        ))}
      </div>
    </div>
  </>;
};

export default EnterPriseAudioDetailsCard;
