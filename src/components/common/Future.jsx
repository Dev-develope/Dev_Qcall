import Image from "next/image";
import CommonButton from "./Button";

export default function Future({img}) {
    return (<>
        <div className="">
            <div className="container mx-auto space-x-10 flex justify-center items-center">
                <div className="flex flex-col md:flex-row overflow-hidden p-6 justify-center">
                    <div className="md:w-1/3 flex flex-col p-6">
                        <span className="lg:w-1/4 md-w-full text-center py-1 border border-gray-300 rounded-full text-xs text-black">
                            Key Benefits
                        </span>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">
                            The Future of AI-Powered Calling is Here
                        </h2>
                        <ul className="mt-4 space-y-2 text-gray-600 self-start">
                            <li className="flex items-start"> At QCall.ai, we’re building human-like AI voices with advanced custom voice training—bringing AI conversations closer to reality.
                                We’re not just innovating. We’re revolutionizing AI calling.</li>
                            <li className="flex items-start">Our parent company, TinyCheque, is dedicated to driving AI advancements and creating meaningful solutions that redefine industries.
                                India is innovating, and we’re leading the charge.</li>
                        </ul>
                        <CommonButton 
                                title="Try QCall.ai Today" 
                                className="bg-[#00a7e6]  text-white rounded-full py-3 px-6 lg:w-1/2 sm:w-auto mt-5"
                                route={"https://cal.com/team/tinycheque/qcall"}
                            />
                    </div>
                    <div className=" lg:w-1/2 md:w-1/2 flex justify-center items-center">
                        <Image
                            src={img}
                            alt="Chat AI"
                            width={400}
                            height={250}
                            className="rounded-xl border border-gray-200 shadow-md object-contain p-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>)
}