"use client";
import React from "react";
import HeroTable from "./HeroTable";
import { usePathname } from "next/navigation";
import { Flower } from "lucide-react";
const HeroCard = ({ herocardData, className, sampleData }) => {
  const path = usePathname();
  const isHelpCenterPage = path === "/helpcenter";
  return (
    <>
      <div className="relative  flex items-center justify-center mb-10 overflow-x-auto shadow-xl">
        <div className="bg-white rounded-2xl max-w-4xl w-full shadow-lg">
          <div className="text-center py-8 px-4">
            <div className="inline-block border border-[#00a7e6]  px-3 py-1 rounded-full text-xs font-light mb-4">
              {herocardData[0]?.sectionTitle}
            </div>
            <h1 className="text-3xl font-semibold text-center">
              {herocardData[0]?.mainHeading}
            </h1>

            {herocardData[0]?.subHeading ? (
              <p className="text-gray-600 mb-2 mt-2 max-w-2xl mx-auto">
                {herocardData[0]?.subHeading}
              </p>
            ) : (
              ""
            )}
            {herocardData[0]?.subpara ? (
              <p className="text-gray-600 mb-1 max-w-2xl mx-auto">
                {herocardData[0]?.subpara}
              </p>
            ) : (
              ""
            )}
          </div>
          {!sampleData ? (
            <div className="p-8">
              <div className={`${className} grid md:grid-cols-3 gap-4`}>
                {herocardData[0]?.cards?.map((card, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 border border-[#00a7e6] rounded-lg p-6 h-full"
                  >
                    {card.extraText && (
                      <p className="text-xs mb-2">{card.extraText}</p>
                    )}
                    <h2 className="text-lg font-semibold mb-1">{card.title}</h2>
                    {card?.paraHeading && (
                      <p className="font-light text-sm mt-4 mb-4">
                        {card.paraHeading}
                      </p>
                    )}
                    <p className="text-gray-600 text-sm mb-2">
                      {card.description}
                    </p>
                    {card?.list && (
                      <ul className="list-inside text-gray-600 text-sm mt-5">
                        {card?.list?.map((item, i) => (
                            <div className="flex gap-2" key={i}>
                              <div className="text-xs text-[#00a7e6]">✦</div>
                              <div>
                                <li key={i} className="mb-1">
                                  {item}
                                </li>
                              </div>
                            </div>
                        ))}
                      </ul>
                    )}
                  </div>
                  // </div>
                ))}
              </div>
            </div>
          ) : (
            <HeroTable data={sampleData} />
          )}

          {herocardData[0].bottmHeading && (
            <div className="flex justify-center items-center">
              {herocardData[0].bottmHeading ? (
                <p className="text-gray-600 mb-2 mt-2 max-w-2xl mx-auto">
                  {herocardData[0].bottmHeading}
                </p>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroCard;
