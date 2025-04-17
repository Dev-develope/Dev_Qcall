import React from 'react';
import CommonButton from './Button';
import Image from 'next/image';

export default function RecruitmentLandingPage({ data }) {
  return (
    <div className="bg-[#0a1328] text-white  flex flex-col items-center py-15 px-4">
      {/* Badge */}
      {data?.badge && (
        <div className="border border-white px-4 py-1 rounded-full text-xs mb-4">
          {data?.badge}
        </div>
      )}

      {/* Headings */}
      <h1 className="text-4xl font-bold mt-4 mb-3 text-center max-w-3xl">{data?.title}</h1>
      {data?.subtitle && <h2 className="text-xl font-semibold mt-2 text-center">{data?.subtitle}</h2>}

      {/* Description */}
      {data?.description && (
        <p className="text-center text-gray-400 max-w-xl mt-4 mb-8">{data?.description}</p>
      )}

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl w-full mt-4">
        {data?.features?.map((feature, index) => (
          <div
            key={index}
            className="bg-[#050a18] p-6 rounded-lg border border-[#00a7e6] text-center flex flex-col justify-between items-center h-full"
          >
            <div className="w-14 h-14 flex items-center justify-center mb-4">
              <Image src={feature.icon} alt="logo" width={56} height={56} />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400 flex-grow">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Trust Section */}
      {data?.trustTitle && <h2 className="text-3xl font-bold mt-16 text-center">{data?.trustTitle}</h2>}
      {data?.trustDescription && (
        <p className="text-center text-gray-400 max-w-2xl mt-4 mb-8">{data?.trustDescription}</p>
      )}

      {/* Button */}
      <CommonButton
        title={data?.buttonText}
        className="bg-[#00a7e6] text-white font-light py-3 px-8 rounded-full transition-colors duration-300 mt-6"
        route={"https://cal.com/team/tinycheque/qcall"}/>
    </div>
  );
}
