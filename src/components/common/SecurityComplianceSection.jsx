import { ShieldCheck, Lock, Database, Cloud } from "lucide-react";
import CommonButton from "./Button";
import Image from "next/image";

export default function SecurityCompliance({ securityData }) {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto text-center">
      <span className="px-4 py-1 text-xs border border-[#00a7e6] rounded-full">
        {securityData?.badge}
      </span>
      <h2 className="text-3xl font-bold text-gray-900 mt-4">
        {securityData?.heading}
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        {securityData?.para}
      </p>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl">
          {securityData?.features?.map((item, index) => (
            <div
              key={index}
              className="border border-[#00a7e6] rounded-lg p-6 items-start space-x-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2 bg-[#00a7e6] rounded-full max-w-12 max-h-12">
                {/* {item?.icon} */}
                <Image src={item?.icon} alt="logo" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-light text-gray-900">
                  {item?.title}
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CommonButton
          title="Try it now for free!!!"
          className="bg-[#00a7e6] text-white mt-10"
          route={"https://cal.com/team/tinycheque/qcall"}
        />
      </div>
    </section>
  );
}
