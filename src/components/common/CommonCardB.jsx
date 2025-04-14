"use client";

import Image from "next/image";
import img from "../../../public/images/miceImg.PNG";
import listLogoImg from "../../../public/images/listlogo.png";
import WavePlayer from "./WavePlayer";
export default function CommonCard({ cardDatas, img }) {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      {cardDatas.map((card, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white overflow-hidden p-6 justify-center items-center"
        >
          <div className="w-1/3 flex justify-center items-center">
            <Image
              src={img}
              alt="Chat AI"
              width={400}
              height={250}
              className="rounded-xl border border-gray-200 shadow-md object-contain p-2"
            />
          </div>
          <div className="w-1/3 flex flex-col justify-center p-6">
            <span className="text-xs px-3 py-1 rounded-full border border-[#00a7e6] self-start">
              {card.span}
            </span>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{card.h1}</h2>
            {card.para && <p className="mt-5 text-sm">{card.para}</p>}
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              {card.list.map((item, listIndex) => (
                <li key={listIndex} className="flex items-start">
                  <Image
                    src={listLogoImg}
                    alt="Chat AI"
                    height={10}
                    width={10}
                    className="mr-3 mt-1"
                  />
                  <div>{item.text}</div>
                </li>
              ))}
            </ul>
            {card?.playeradd && (
              <div className="w-1/2 mt-2">
                {card?.playeradd && <WavePlayer audio={card?.playeradd} />}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
