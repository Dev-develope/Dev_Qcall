"use client";

import Image from "next/image";
import listLogoImg from "../../../public/images/listlogo.png";
import WavePlayer from "./WavePlayer";

export default function AboutUsCard({ cardDatas, img }) {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center mt-8 mb-8">
      <div className="space-y-10 max-w-8xl">
        {cardDatas.map((card, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 bg-white p-6 rounded-xl"
          >
            {/* Left: Text Content */}
            <div className="flex justify-center">
              <Image
                src={img}
                alt="Chat AI"
                width={600}
                height={500}
                className="rounded-3xl border border-gray-200 shadow object-contain p-2"
              />
            </div>
            <div className="space-y-4">
              <span className="text-xs px-3 py-1 rounded-full border border-[#00a7e6] inline-block w-fit">
                {card.span}
              </span>

              <h2 className="text-4xl font-bold text-gray-800">
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
                  <WavePlayer audio={card.playeradd} />
                </div>
              )}
            </div>

            {/* Right: Image */}
            
          </div>
        ))}
      </div>
    </div>
  );
}