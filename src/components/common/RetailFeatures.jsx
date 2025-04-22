import Image from "next/image";
import React from "react";
import CommonButton from "./Button";
import { FarmerMotion } from "./FarmerMotion";

const RetailFeatures = ({ data }) => {
  return (
    <div className="bg-[#050a18] text-white py-16 text-center">
      {/* Label */}
      {data.label && (
        <div className="inline-block border border-[#00a7e6] px-3 py-1 rounded-full text-xs font-light mb-4">
          {data.label}
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">{data.title}</h2>

      {/* Feature Cards */}
      <FarmerMotion>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="border border-[#00a7e6] p-6 rounded-2xl  bg-[#050a18] shadow-lg flex flex-col items-center"
            >
              {/* Icon Wrapper - Centered */}
              {/* <div className="flex items-center justify-center w-12 h-12 bg-purple-300  rounded-full mb-4">
                            {feature.icon}
                        </div> */}
              <div className=" text-white w-12 h-12 rounded-full flex justify-center items-center">
                <Image src={feature.icon} alt="LOGO" />
              </div>

              {/* Feature Content */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </FarmerMotion>

      {/* Call-to-Action Button */}
      {data.buttonText && (
        // <button className="mt-8 bg-[#00a7e6] hover:bg-purple-700 font-medium py-3 px-6 rounded-full text-sm shadow-lg">
        //     {data.buttonText}
        // </button>
        <div className="flex justify-center items-center">
          <CommonButton
            title={data.buttonText}
            className={
              "mt-8 bg-[#00a7e6] font-medium py-3 px-6 rounded-full text-sm shadow-lg"
            }
            route={"https://cal.com/team/tinycheque/qcall"}
          />
        </div>
      )}
    </div>
  );
};

export default RetailFeatures;
