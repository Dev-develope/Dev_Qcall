import React from 'react';
import Image from 'next/image';
import img from '../../../public/images/2Product-ContactCentre/Wave.png'
import CommonButton from './Button';
const InsuranceSafetySection = ({ data }) => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src={img} 
                    alt="Background" 
                    layout="fill" 
                    objectFit="cover" 
                    className="brightness-75" 
                />
            </div>

            {/* Content */}
            <div className="relative  max-w-2xl px-6">
                <div className="inline-block border border-[#00a7e6] px-3 py-1 rounded-full text-xs font-light mb-4">
                    {data.label}
                </div>
                <h1 className="text-3xl md:text-4xl font-light mb-4">
                    {data.title}
                </h1>
                <p className="text-gray-200 text-sm md:text-base mb-6">
                    {data.description}
                </p>
               <div className='flex justify-center items-center'>
               <CommonButton title={data.buttonText} className="bg-[#00a7e6] font-medium py-2 px-6 rounded-full text-sm shadow-lg" route={"https://cal.com/team/tinycheque/qcall"}/>
               </div>
            </div>
        </div>
    );
};

export default InsuranceSafetySection;
