"use client";
import { MapPin, Share2, PhoneCall } from "lucide-react"; // Or use your own icons

const features = [
  {
    icon: <MapPin className="h-8 w-8 text-[#00a7e6]" />,
    title: "Automated Ticket Routing",
    description:
      "Effortlessly direct queries to the right place, saving time and ensuring swift responses.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-[#00a7e6]" />,
    title: "Workflow Mastery",
    description:
      "We fine-tune your processes for optimal productivity and seamless operations.",
  },
  {
    icon: <PhoneCall className="h-8 w-8 text-[#00a7e6]" />,
    title: "Automated Callback",
    description:
      "Never miss a beat with our automated callback system, guaranteeing prompt resolutions.",
  },
];

export default function AboutThreeCard() {
  return (
    <div className="container mx-auto px-4 py-10  h-[28rem] flex justify-center items-center">
      <div className="flex justify-center items-center gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white shadow-lg rounded-2xl p-6 h-full min-h-[250px] max-w-sm"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
