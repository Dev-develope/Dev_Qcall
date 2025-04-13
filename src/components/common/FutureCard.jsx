"use client"
import React from 'react';
import CommonButton from './Button';
import Image from 'next/image';

const FeatureCard = ({ icon, title, description }) => (

    
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-6 w-full h-full border border-[#00a7e6]">
            <div className=" text-white w-12 h-12 rounded-full flex justify-center items-center">
                <Image src={icon} alt="LOGO"/>
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
        </div>
  
);


// Main component
const FutureCard = ({ data }) => {
    return (
        <div className="bg-gray-50 flex justify-center py-20 px-4">
            <div className="max-w-4xl w-full flex flex-col items-center text-center px-3">
                {/* Badge */}
                <div className="inline-block px-4 py-1 rounded-full bg-white text-sm mb-6 border border-[#00a7e6]">
                    {data.badge}
                </div>

                {/* Headings */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{data.title}</h1>
                {data.subtitle ? <h2 className="text-xl text-gray-700 mb-4">{data.subtitle}</h2>
                    : " "}
                {/* Subtitle */}
                {data.description ? <p className="max-w-xl mb-10">{data.description}</p> : ""}

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10 text-start">
                    {data?.features?.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>

                {data.description2 ? <p className="max-w-xl mb-10">{data.description2}</p> : ""}
                <CommonButton title={data.buttonText} className="bg-[#00a7e6] text-white font-medium px-6 py-3 rounded-full transition-colors" route={"https://cal.com/team/tinycheque/qcall"}/>
            </div>
        </div>
    );
};

// Data Array


export default FutureCard;
