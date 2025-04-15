import CommonButton from "./Button";

export default function AiMythsSection({ mythData }) {
  return (
    <section className="text-center py-12 px-4 bg-[#f9f9f9]">
      <span className="px-4 py-1 border border-gray-300 rounded-full text-xs text-black">
        Key Benefits
      </span>
      <h2 className="text-3xl font-bold text-gray-900 mt-4">
        Breaking AI Myths - The Truth <br /> About AI Call Centers
      </h2>
      <p className="text-gray-600 mt-2">
        To improve engagement and drive results.
      </p>

      {/* Dynamic Myths Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {mythData?.map((ele) => (
          <div
            key={ele.id}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm border border-primary"
          >
            <p className="text-xs text-gray-500">{ele.tag || "Myth"}</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-2">
              {ele.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{ele.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Text & CTA Button */}
      <p className="text-gray-600 mt-6">
        <span className="font-medium">Smarter Workflows</span> =
        <span className="font-medium"> Better Efficiency</span> =
        <span className="font-medium"> More Revenue</span>
      </p>
      <div className="flex justify-center items-center">
        <CommonButton
          title="Try QCall.ai today"
          className="bg-[#00a7e6] mt-5 text-white text-sm rounded-full"
          route={"https://cal.com/team/tinycheque/qcall"}
        />
      </div>
    </section>
  );
}
