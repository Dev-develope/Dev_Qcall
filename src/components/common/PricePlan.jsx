"use client";
import { useState } from "react";
import CommonButton from "./Button";
import { ArrowRightIcon, Check, CircleCheck } from "lucide-react";

export default function PricePlan() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      id: 1,
      title: "Starter",
      price: "$99",
      description: "For individuals",
      features: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
    {
      id: 2,
      title: "Growth",
      price: "$159",
      description: "For startups",
      features: [
        "Starter Plan",
        "Option 2",
        "Option 3",
        "Option 5",
        "Option 6",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "Enterprise",
      price: "$389",
      description: "For big companies",
      features: ["Option 1", "Option 2", "Option 3", "Option 6"],
    },
    {
      id: 4,
      title: "Unicorn",
      price: "$30,000",
      description: "For Fortune 500 companies",
      features: ["Option 1", "Option 2", "Option 3"],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center p-8 bg-white mt-5">
      {/* Toggle Billing Cycle */}
      <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-full text-sm font-medium">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-4 py-2 rounded-full transition ${
            billingCycle === "monthly"
              ? "bg-[#00a7e6] text-white"
              : "text-gray-500"
          }`}
        >
          Monthly Billing
        </button>
        <button
          onClick={() => setBillingCycle("annual")}
          className={`px-4 py-2 rounded-full transition ${
            billingCycle === "annual"
              ? "bg-[#00a7e6] text-white"
              : "text-gray-500"
          }`}
        >
          Annual Billing
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.id}
            className={`border rounded-lg p-6 text-start relative ${
              plan.popular
                ? "border-[#00a7e6] bg-[#00a7e6] shadow-lg scale-105"
                : "border-gray-300"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-gray-100 px-3 py-1 text-xs rounded-full">
                ⭐ Most Popular
              </span>
            )}
            <h3 className="text-gray-600 font-semibold">{plan.description}</h3>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              {plan.price}/month
            </h2>
            <p className="mt-2 text-gray-500">What's included</p>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start justify-start gap-2"
                >
                  <CircleCheck className="text-white bg-[#00a7e6] rounded-full" /> {feature}
                </li>
              ))}
            </ul>
            <CommonButton
              className={`mt-4 px-4 py-2 rounded-xl w-full ${
                index === 1
                  ? "bg-white text-[#00a7e6] border border-[#00a7e6]"
                  : "bg-[#00a7e6] text-white"
              }`}
              title="Get Started"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
