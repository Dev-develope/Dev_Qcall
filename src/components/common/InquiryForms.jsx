"use client";
import Image from "next/image";
import backImg from "../../../public/images/LandingPage/BG.png";
import Navbar from "./Navbar";
import CommonButton from "./Button";
import React, { useState } from "react";
export default function InquiryForms() {
  const countries = [
    { name: "USA", code: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="relative min-h-screen mb-10">
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
          <span className=" border border-[#00a7e6] text-xs px-3 py-1 rounded-full uppercase">
            Inquiry
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            Send Us Inquiry Messages
          </h1>
          <p className="text-lg md:text-2xl font-light mt-2">
            QCall Enterprise Solution
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-center px-4 -mt-24 relative ">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-2xl w-full">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Send Us Messages
          </h2>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What's your name? *
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Type here"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What's your email? *
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Type here"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What's your company's website? *
              </label>
              <input
                type="url"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Type here"
              />
            </div>

            {/* Region and Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Region and languages *
              </label>
              <p className="text-xs text-gray-500 mb-2">
                If English-speaking agents don’t work for your case, please
                state your preferred language.
              </p>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="language"
                    className="text-purple-600"
                  />
                  <span>Primarily English & English-speaking regions</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="language"
                    className="text-purple-600"
                  />
                  <span>
                    Could use English-speaking agents, but other language
                    preferred
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="language"
                    className="text-purple-600"
                  />
                  <span>CANNOT USE ENGLISH: Must be other language</span>
                </label>
              </div>
            </div>

            {/* Use Case */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What's your use case? *
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                <option>Select an option</option>
                <option>Customer Support</option>
                <option>Sales Calls</option>
                <option>Other</option>
              </select>
            </div>

            {/* Phone Call Volume */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How many phone calls would you like to dispatch or receive per
                month? *
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="calls"
                    className="text-purple-600"
                  />
                  <span>Less than 5,000</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="calls"
                    className="text-purple-600"
                  />
                  <span>5,000 - 10,000</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="calls"
                    className="text-purple-600"
                  />
                  <span>10,000 - 49,999</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="calls"
                    className="text-purple-600"
                  />
                  <span>50,000 - 250,000</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="calls"
                    className="text-purple-600"
                  />
                  <span>250,000+</span>
                </label>
              </div>
            </div>

            {/* Phone Number */}
            {/* Phone Number */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-sm pointer-events-none">
                  🇺🇸 USA
                </span>
                <input
                  type="text"
                  className="w-full pl-20 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Type your number"
                />
              </div>
            </div> */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>

              <div className="flex items-stretch rounded-lg border border-gray-300 overflow-hidden">
                {/* Country Selector */}
                <select
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const country = countries.find(
                      (c) => c.code === e.target.value
                    );
                    setSelectedCountry(country);
                  }}
                  className="bg-gray-100 text-sm outline-none w-[5remrem]"
                >
                  {countries.map((country) => {
                    const words = country.name.split(" ");
                    const label =
                      words.length === 1
                        ? words[0][0].toUpperCase()
                        : `${words[0][0]}${
                            words[words.length - 1][0]
                          }`.toUpperCase();

                    return (
                      <option key={country.code} value={country.code}>
                        {country.flag} {label} ({country.code})
                      </option>
                    );
                  })}
                </select>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  className="flex-1 px-3 py-2 text-sm focus:outline-none"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-end">
              <CommonButton
                className="bg-[#00a7e6] text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-3 shadow-lg"
                title="Submit"
                // route={"https://app.qcall.ai/auth/sign-up"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
