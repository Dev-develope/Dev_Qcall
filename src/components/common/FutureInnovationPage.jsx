import Image from 'next/image';
import Link from 'next/link';
import CommonButton from './Button';
import partner1 from "../../../public/images/4Partner/partner1.png"
import partner2 from "../../../public/images/4Partner/partner2.png"
import partner3 from "../../../public/images/4Partner/partner3.png"
// Dynamic data structure
const heroData = {
  badge: "Unlock a Future of Innovation",
  heading: "Transform. Elevate. Dominate",
  description: "Embrace a new era of AI-powered excellence with QCall AI. Our cutting-edge voice AI solutions empower businesses to scale, optimize, and stay ahead in the rapidly evolving digital landscape."
};

const featuresData = [
  {
    image: partner1,
    title: "Partner with Industry Leaders",
    description: "Join forces with the best minds in AI, technology, and customer engagement. Backed by industry experts, QCall AI provides seamless integration, intelligent automation, and unparalleled support to ensure your business success."
  },
  {
    image: partner2,
    title: "Drive the Digital Evolution",
    description: "Step into the future with AI-powered voice solutions that redefine communication. Automate interactions, streamline workflows, and enhance customer experiences with the latest advancements in generative AI."
  },
  {
    image: partner3,
    title: "Stay Ahead of the Competition",
    description: "Gain a strategic edge with an AI solution designed to handle high-volume demands while delivering personalized customer interactions. QCall AI ensures your business stays ahead of industry leaders by enhancing efficiency and scalability."
  }
];

export default function FutureInnovationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className=" border border-[#00a7e6] inline-block px-4 py-1 rounded-full  text-gray-800 text-sm font-medium mb-6">
          {heroData.badge}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {heroData.heading}
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          {heroData.description}
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {featuresData.map((feature, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative h-56 w-full">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center items-center'>
        <CommonButton title="Try it now for free!!!" className="bg-[#00a7e6] text-white" route={"https://cal.com/team/tinycheque/qcall"}/>
      </div>
    </div>
  );
}