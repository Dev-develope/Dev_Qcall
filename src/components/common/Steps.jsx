import Image from "next/image";
import CommonButton from "./Button";

const stepsData = [
  {
    title: "Assign a Task",
    description:
      "Set up your call requirements—whether it's sales, support, follow-ups, or reminders.",
    image: "/images/step1.jpg",
  },
  {
    title: "AI Takes Over",
    description:
      "QCall.ai dials, engages, and responds in real-time—handling interactions just like a human.",
    image: "/images/step2.jpg",
  },
  {
    title: "Track & Optimize",
    description:
      "Get instant call transcripts, insights, and analytics to improve future conversations.",
    image: "/images/step3.jpg",
  },
];

export default function Steps({ img, img2 }) {
  return (
    <div className="flex flex-col items-center px-4 py-12 md:px-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
        3 Simple Steps to Smarter Calls
      </h2>
      <p className="text-center text-gray-600 mb-8">
        to improve engagement and drive results.
      </p>

      {/* Steps Section */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {stepsData.map((step, index) => (
          <div key={index} className="relative h-[250px] w-[250px] md:w-[250px] rounded-2xl overflow-hidden">
            <Image
              src={index === 2 ? img2 : img}
              // src={img2}
              alt="image"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className=" absolute inset-0 flex flex-col items-start justify-center px-6">
              <h3 className="w-[10rem] font-bold text-lg text-center">{step.title}</h3>
              <p className=" mt-2 max-w-[10rem] text-xs text-center">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-700 mt-8">It’s that simple!</p>
      <CommonButton
        title="Try QCall.ai Today"
        className="rounded-full bg-[#00a7e6] text-white text-sm mt-5"
        route="https://cal.com/team/tinycheque/qcall"
      />
    </div>
  );
}
