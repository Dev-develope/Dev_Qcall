import Image from "next/image";
import CommonButton from "./Button";

export default function Future({img}) {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row  justify-center items-center">
                    {/* Left Content Section */}
                    <div className="w-full lg:w-1/3 flex flex-col">
                        <span className="px-4 py-1 border border-gray-300 rounded-full text-xs text-black w-fit self-start">
                            AI-Powered
                        </span>
                        
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-4">
                            The Future of AI-Powered<br className="hidden sm:block" /> Calling is Here
                        </h2>
                        
                        <ul className="mt-6 space-y-4 text-gray-600">
                            <li className="flex gap-3">
                                <span className="text-[#00a7e6] flex-shrink-0 font-bold">✦</span>
                                <p>
                                    At QCall.ai, we're building human-like AI voices with advanced custom voice training—bringing AI conversations closer to reality.
                                    <strong className="block mt-1">We're not just innovating. We're revolutionizing AI calling.</strong>
                                </p>
                            </li>
                            
                            <li className="flex gap-3">
                                <span className="text-[#00a7e6] flex-shrink-0 font-bold">✦</span>
                                <p>
                                    Our parent company, TinyCheque, is dedicated to driving AI advancements and creating meaningful solutions that redefine industries.
                                    <strong className="block mt-1">India is innovating, and we're leading the charge.</strong>
                                </p>
                            </li>
                        </ul>
                        
                        <div className="mt-8">
                            <CommonButton 
                                title="Try QCall.ai Today" 
                                className="bg-[#00a7e6]  text-white rounded-full py-3 px-6 w-full sm:w-auto"
                                route={"https://cal.com/team/tinycheque/qcall"}
                            />
                        </div>
                    </div>
                    
                    {/* Right Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="border border-gray-200 rounded-xl shadow-md p-2 bg-white max-w-md">
                            <Image
                                src={img}
                                alt="AI Powered Technology"
                                width={500}
                                height={400}
                                className="rounded-lg w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}