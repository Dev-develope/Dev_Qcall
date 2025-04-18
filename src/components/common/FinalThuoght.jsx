import CommonButton from "./Button";

export default function FinalThuoght() {
    return (
        <>
            <div className="w-full">
                <div className="container mx-auto px-4 py-16 relative text-center">
                    <div
                        className="absolute inset-0 bg-[#00a7e6]over bg-[#00a7e6]enter"
                        style={{ backgroundImage: "url('/public/Assets/images/img2.jpg')", opacity: 0.3 }}
                    ></div>

                    <div className="relative flex flex-col items-center ">
                        <span className="px-4 py-1 border border-gray-300 rounded-full text-xs text-black">
                            Key Benefits
                        </span>
                        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mt-4">
                            Final Thoughts
                        </h2>
                        <p className="text-md  mt-4 max-w-xl">
                            QCall.ai isn’t just another AI solution—it’s your next big advantage.
                            Whether you’re in BPO, Real Estate, SaaS, BFSI, EdTech, or any business needing smarter calls, we’ve got you covered.
                        </p>
                        <p className="mt-4">The future of AI-powered conversations starts NOW.</p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <CommonButton title="Let’s Talk Smarter. Let’s Talk AI" className="bg-[#00a7e6] text-white" route={"https://www.qcall.ai/"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}