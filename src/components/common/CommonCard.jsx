'use client';

import Image from 'next/image';
import img from "../../../public/images/AiImage.PNG"

export default function CommonCard({ cardDatas,img }) {


    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            {cardDatas.map((card, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white overflow-hidden p-6 justify-center items-center">
                    <div className="md:w-1/3 flex flex-col justify-center p-6">
                        <span className="text-xs px-3 py-1 rounded-full border border-[#00a7e6] self-start">
                            {card.span}
                        </span>
                        {card.para && <p className='mt-5 text-sm'>{card.para}</p>}
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">
                            {card.h1}
                        </h2>
                        <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                            {card.list.map((item, listIndex) => (
                                <li key={listIndex} className="flex items-start">
                                    <span className="text-[#00a7e6] mr-2">&#10003;</span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                        <Image
                            src={img}
                            alt="Chat AI"
                            width={400}
                            height={250}
                            className="rounded-xl border border-gray-200 shadow-md object-contain p-2"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}