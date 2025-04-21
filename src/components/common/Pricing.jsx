"use client"
import CommonButton from "./Button";
// import videoClip from "../../../public/videos/QcallCircleVideo.mp4"
import Image from "next/image";
import circleGIf from "../../../public/videos/QCallAiAnimate.gif"


export default function Pricing({ pricingPlans, video, img = circleGIf }) {
    return (
        <div className={`relative w-full bg-black overflow-hidden ${img ? "h-[40rem]" : "h-[45rem"}`}>
            {img ? <div className="absolute inset-0 w-full h-full ">
                <Image
                    src={img}
                    alt="Upgrade Background"
                    layout="fill"
                    // objectFit="cover"
                    priority
                    className="object-cover sm:object-contain"
                />
            </div> :
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 object-cover"
                >
                    <source src="/path" type="video/mp4" />
                </video>}

            {pricingPlans?.map((plan) => (
                <div key={plan.id} className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    {plan.label && (
                        <span className="px-4 py-1 border border-gray-300 rounded-full text-xs">
                            {plan.label}
                        </span>
                    )}
                    <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mt-4 max-w-96">
                        {plan.title}
                    </h1>
                    <p className="text-xs mt-2 max-w-md">
                        {plan.description}
                    </p>
                    <CommonButton title={plan.buttonText} className="text-sm mt-6 bg-[#00a7e6] rounded-full" />     {/* route={"/pricing"} */}
                 
                </div>
            ))}
        </div>
    );
}
