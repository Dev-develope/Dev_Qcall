import Image from "next/image";
import backImg from "../../../public/images/LandingPage/BG.png";
import Navbar from "./Navbar";

export default function InquiryPage() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar should overlay the background */}
      <div className="absolute w-full ">
        <Navbar />
      </div>

      {/* Background Section */}
      <div className="relative w-full h-[60vh]">
        <Image 
          src={backImg} 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          priority 
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <span className="bg-purple-600 text-xs px-3 py-1 rounded-full uppercase">Inquiry</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">Send Us Inquiry Messages</h1>
          <p className="text-lg md:text-2xl font-light mt-2">QCall Enterprise Solution</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-center px-4 -mt-24 relative ">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-2xl w-full">
          <h2 className="text-center text-2xl font-semibold mb-6">Send Us Messages</h2>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">What's your name? *</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" placeholder="Type here" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">What's your email? *</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" placeholder="Type here" />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-medium text-gray-700">What's your company's website? *</label>
              <input type="url" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" placeholder="Type here" />
            </div>

            {/* Region and Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Region and languages *</label>
              <p className="text-xs text-gray-500 mb-2">If English-speaking agents don’t work for your case, please state your preferred language.</p>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="language" className="text-purple-600" />
                  <span>Primarily English & English-speaking regions</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="language" className="text-purple-600" />
                  <span>Could use English-speaking agents, but other language preferred</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="language" className="text-purple-600" />
                  <span>CANNOT USE ENGLISH: Must be other language</span>
                </label>
              </div>
            </div>

            {/* Use Case */}
            <div>
              <label className="block text-sm font-medium text-gray-700">What's your use case? *</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                <option>Select an option</option>
                <option>Customer Support</option>
                <option>Sales Calls</option>
                <option>Other</option>
              </select>
            </div>

            {/* Phone Call Volume */}
            <div>
              <label className="block text-sm font-medium text-gray-700">How many phone calls would you like to dispatch or receive per month? *</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="calls" className="text-purple-600" />
                  <span>Less than 5,000</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="calls" className="text-purple-600" />
                  <span>5,000 - 10,000</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="calls" className="text-purple-600" />
                  <span>10,000 - 49,999</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="calls" className="text-purple-600" />
                  <span>50,000 - 250,000</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="calls" className="text-purple-600" />
                  <span>250,000+</span>
                </label>
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700">🇺🇸 USA</span>
                <input type="text" className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" placeholder="Type here" />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
