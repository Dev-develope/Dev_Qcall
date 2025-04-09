import { cardData3 } from "src/constants/naviation";
import CommonButton from "./Button";

export default function CardItem3() {
    return (
        <>
            <section className="py-16 px-6 text-center bg-white flex flex-col justify-center items-center overflow-hidden">
                <div className="flex flex-col items-center">
                    <span className="px-4 py-1 border border-gray-300 rounded-full text-xs text-black">
                        Key Benefits
                    </span>
                    <h2 className="text-[clamp(1.25rem,5vw,2rem)] font-bold text-gray-900 mt-4 text-center">
                        Why Choose QCall.ai?
                    </h2>
                    <p className="text-gray-600 text-lg mt-2 max-w-2xl text-center">
                        To increase engagement and drive results.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4">
                    {cardData3?.map((ele, index) => (
                        <div key={index} className="border border-primary rounded-xl p-6 shadow-md">
                            <h1 className="text-lg font-semibold">{ele.Heading}</h1>
                            <p className="text-gray-600 text-sm mt-2">{ele.para1}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
