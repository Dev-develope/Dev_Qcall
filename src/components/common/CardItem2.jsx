import React from 'react';
import { cardData2 } from "src/constants/naviation";
import CommonButton from "./Button";
import collection from "../../../public/images/qcallAi/landing Page content/icon/collection.png"
import fifth from "../../../public/images/qcallAi/landing Page content/icon/fifth.png"
import Image from 'next/image';

export default function CardItem2() {
    const staticCardData = [
        {
            icon: collection,
            heading: 'Seamless Integration',
            description: 'Automate payment reminders and reduce overdue payments effortlessly.'
        },
        {
            icon:fifth,
            heading: 'Data-Driven Insights',
            description: 'AI can pre-screen candidates, schedule interviews, and follow up automatically.'
        }
    ];

    return (
        <section className="py-16 px-4 text-center bg-white flex flex-col items-center">
            <div className="flex flex-col items-center max-w-lg w-full">
                <span className="px-4 py-1 border border-gray-300 rounded-full text-xs text-black">
                    Use Cases
                </span>
                <h2 className="text-[clamp(1.25rem,5vw,2rem)] font-bold text-gray-900 mt-4 text-center">
                    Who can benefit from QCall.ai
                </h2>
                <p className="text-gray-600 mt-2 text-[clamp(0.875rem,3vw,1rem)] max-w-md">
                    Sales & Lead generation - Automated cold calls, qualify leads,
                    and follow up without lifting a finger.
                </p>
            </div>

            {/* Dynamic Cards Section */}
            <div className="flex flex-wrap justify-center item-center gap-6 mt-10 max-w-5xl mx-auto px-4">
                {cardData2?.map((ele, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-[18rem] h-[12rem] border border-primary rounded-xl p-6 shadow-md text-center"
                    >
                        <div className="mb-2 text-white rounded-full h-12 w-12"><Image src={ele.icon} alt="LOGO" /></div>
                        <h3 className="text-sm font-semibold  mb-2">{ele.Heading}</h3>
                        <p className="text-gray-600 text-sm">
                            {ele.para1}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-6 max-w-5xl mx-auto px-4">
                {staticCardData.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-[18rem] h-[12rem] border border-primary rounded-xl p-5 shadow-md text-center"
                    >
                        <div className="mb-2 text-white rounded-full h-12 w-12"><Image src={card.icon} alt="LOGO" /></div>
                        <h3 className="text-sm font-semibold  mb-2">{card.heading}</h3>
                        <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                ))}
            </div>

            <p className="text-gray-600 text-[clamp(1rem,3vw,1.25rem)] mt-5 max-w-md text-center">
                If your business relies on calls, QCall.ai is your GameChanger.
            </p>
            <div className="mt-5">
                <CommonButton
                    className="text-white bg-[#00a7e6] px-6 py-3 rounded-full text-[clamp(0.875rem,2vw,1rem)]"
                    title="Request a Demo"
                    route="https://cal.com/team/tinycheque/qcall"
                />
            </div>
        </section>
    );
}



