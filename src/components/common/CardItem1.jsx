import { cardData } from "src/constants/naviation";
import { FarmerMotion, FarmerMotionCard } from "./FarmerMotion";

export default function CardItem1() {
  return (
    <>
      <section className="py-16 px-6 text-center bg-white">
        <div className="flex flex-col items-center">
          <span className="px-4 py-1 border border-gray-300 rounded-full text-xs text-black">
            What Matters At QCall.ai
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            We simplify your calling actions
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            to improve engagement and drive results.
          </p>
        </div>
        <FarmerMotionCard>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cardData?.map((ele, index) => (
              <div
                key={index}
                className="border border-primary rounded-xl p-6 shadow-md card-animate"
              >
                <h3 className="text-xs text-[#00a7e6] lip-text ">
                  {ele.Heading}
                </h3>
                <p className=" font-bold text-4xl text-[#00a7e6]   mt-2">
                  {ele.para1}
                </p>
                <p className="text-gray-600 text-sm mt-2">{ele.para2}</p>
              </div>
            ))}
          </div>
        </FarmerMotionCard>
      </section>
    </>
  );
}
