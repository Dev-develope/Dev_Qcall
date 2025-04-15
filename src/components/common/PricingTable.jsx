"use client";
import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const plans = [
  { name: "Starter", price: 99 },
  { name: "Growth", price: 159 },
  { name: "Enterprise", price: 389 },
  { name: "Unicorn", price: 30000 },
];

const features = [
  {
    section: "Basic",
    items: [
      { label: "Option 1", availability: [true, true, true, true] },
      { label: "Option 2", availability: [true, true, true, true] },
      { label: "Option 3", availability: [false, true, true, true] },
      { label: "Option 4", availability: [false, true, true, true] },
      { label: "Option 5", availability: [false, true, true, true] },
      { label: "Option 6", availability: [false, false, true, true] },
      { label: "Option 7", availability: [false, false, false, true] },
      { label: "Option 8", availability: [false, false, false, true] },
      { label: "Option 9", availability: [false, false, false, true] },
      { label: "Option 10", availability: [false, false, false, true] },
    ],
  },
  {
    section: "Others",
    items: [
      { label: "Option 1", availability: [false, true, true, true] },
      { label: "Option 2", availability: [false, false, true, true] },
      { label: "Option 3", availability: [false, false, false, true] },
      { label: "Option 3", availability: [false, false, false, true] },
      { label: "Option 4", availability: [false, false, false, true] },
    ],
  },
];

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="p-6 w-full max-w-7xl mx-auto mb-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Compare QCall.AI Plans</h2>
        <p className="text-sm text-gray-500">Features comparison table for our plans</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-4 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="">
              <th className="text-left p-4">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="billing"
                      checked={isAnnual}
                      onChange={() => setIsAnnual(!isAnnual)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 relative bg-gray-200 rounded-full peer-checked:bg-[#00a7e6] transition-all">
                      <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                          isAnnual ? "translate-x-full" : ""
                        }`}
                      />
                    </div>
                    <span className={`text-sm ${!isAnnual ? "text-gray-500 font-medium" : "text-gray-500 font-medium"}`}>
                      {!isAnnual?"Monthly":"Yearly"}
                    </span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="billing"
                      checked={isAnnual}
                      onChange={() => setIsAnnual(true)}
                      className="sr-only peer"
                    />
                    <span className={`text-sm ${isAnnual ? "text-gray-500 font-medium" : "text-gray-500 font-medium"}`}>
                    {!isAnnual?"Monthly":"Yearly"} <span className="text-xs text-[#00a7e6]">(Save 40%)</span>
                    </span>
                  </label>
                </div>
              </th>
              {plans.map((plan) => (
                <th key={plan.name} className="text-center p-4">
                  <div className="font-semibold text-gray-800">{plan.name}</div>
                  <div className="text-xl font-bold">
                    $
                    {isAnnual
                      ? (plan.price * 12 * 0.6).toFixed(2)
                      : plan.price.toFixed(2)}
                    <span className="text-sm font-normal">/MO</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                <tr className="bg-gray-50">
                  <td
                    colSpan={plans.length + 1}
                    className="p-2 text-left font-semibold text-sm text-gray-600"
                  >
                    {section.section}
                  </td>
                </tr>
                {section.items.map((item, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="p-2 text-sm text-gray-700">{item.label}</td>
                    {item.availability.map((available, planIdx) => (
                      <td key={planIdx} className="text-center">
                        {available ? (
                          <CheckCircle className="text-[#00a7e6] inline w-5 h-5" />
                        ) : (
                          <XCircle className="text-red-400 inline w-5 h-5" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
