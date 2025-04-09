"use client";

import React, { useState } from "react";
import { CrossIcon, RightIcon } from "./RightIcon";

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    { name: "Starter", monthly: 99, annually: 99 * 12 * 0.6 },
    { name: "Growth", monthly: 159, annually: 159 * 12 * 0.6 },
    { name: "Enterprise", monthly: 389, annually: 389 * 12 * 0.6 },
    { name: "Unicorn", monthly: 30000, annually: 30000 * 12 * 0.6 },
  ];

  const features = [
    {
      category: "Basic",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5",
        "Option 6",
        "Option 7",
        "Option 8",
        "Option 9",
        "Option 10",
      ],
    },
    {
      category: "Others",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold">Compare QCall.AI Plans</h2>
      <p className="text-gray-500 text-sm mb-4">
        Features comparison table for our plans
      </p>
      <div className="w-full max-w-2xl overflow-auto">
        <table className="w-full border-2 rounded-2xl text-sm text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Features</th>
              {plans.map((plan,index) => (
                <th key={index} className="p-4 text-center">
                  <div className="font-semibold">{plan.name}</div>
                  <div className="text-lg font-bold">
                    ${isAnnual ? plan.annually.toFixed(0) : plan.monthly}{" "}
                    <span className="text-sm">/MO</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature,index) => (
              <div key={index}>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium" colSpan={plans.length + 1}>
                    {feature.category}
                  </td>
                </tr>
                {feature.options.map((option, idx) => (
                  <tr key={`${feature.category}-${idx}`}>
                    <td className="p-4 border-b">{option}</td>
                    {plans.map((plan, planIdx) => (
                      <td key={planIdx} className="p-4 text-center border-b">
                        {Math.random() > 0.5 ? <RightIcon /> : <CrossIcon />}
                      </td>
                    ))}
                  </tr>
                ))}
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
