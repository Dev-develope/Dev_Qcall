import React from 'react';
import CommonButton from './Button';
import { driveMoreRevenueData } from 'src/constants/ai-sales';
import Image from 'next/image';

const QCallHeroSection = ({ videoClip, img }) => {
  return (
    <div className={`relative w-full overflow-hidden ${img ? "lg:[50rem] sm:h-full" : "h-[45rem]"}`}>
      {img ? <div className="absolute inset-0 w-full h-full ">
        <Image
          src={img}
          alt="Upgrade Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div> :
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 object-cover"
        >
          <source src={videoClip} type="video/mp4" />
        </video>}

      {/* <div className="absolute inset-0 bg-[#00a7e6]lack/60 backdrop-blur-sm"></div> */}


      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">

        <div className="inline-block border border-[#00a7e6] px-4 py-2 rounded-full text-sm mb-2 text-white">
          What Achievement At Qcall.ai
        </div>

        <h1 className="text-4xl font-light  max-w-4xl mx-auto mb-4 leading-tight text-white">
          Drive More Revenue, Reduce Manual Tasks
        </h1>

        <p className=" text-lg max-w-2xl mx-auto mb-8 text-white">
          to improve engagement and drive results.
        </p>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl px-4 text-white">
          {driveMoreRevenueData.map((card, index) => (
            <div
              key={index}
              className=" border border-[#00a7e6] bg-[#050a18] rounded-3xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="text-xs mb-2 block">
                {card.category}
              </span>
              <h3 className="text-xl font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <CommonButton title="Create your AI agent in 30 seconds" className="mt-12 bg-[#00a7e6] text-white font-light py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg" route={"https://cal.com/team/tinycheque/qcall"}/>
      </div>
    </div>
  );
};

export default QCallHeroSection;