import Image from "next/image";
import CommonButton from "./Button";
import img from "../../../public/images/robo.jpg"
export default function UpgradeSection({img}) {
    return (
        <div className="relative w-full flex items-center justify-center px-4 py-16">

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={img}
                    alt="Upgrade Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            {/* Content on Top of Image */}
            <div className="relative  text-center text-white flex flex-col items-center">
                <span className="px-4 py-1 border border-gray-300 rounded-full text-xs">
                    Upgrade
                </span>
                <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mt-4">
                    Ready to Upgrade Your Calling Game?
                </h2>
                <p className="text-[clamp(1rem,2.5vw,1.25rem)] mt-4 max-w-xl">
                    Let AI handle the repetitive calls while you focus on growth, customer relationships, and strategic moves.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <CommonButton title="Start for Free" className=" text-white bg-[#00a7e6] " route="https://app.precallai.com/auth/sign-up"/>
                    <CommonButton title="Book a Demo" className='bg-white text-black hover:text-[#00a7e6]' route={"https://cal.com/team/tinycheque/qcall"}/>
                </div>
            </div>
        </div>
    );
}
