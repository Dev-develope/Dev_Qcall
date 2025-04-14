import React from 'react';

const cardData = [
  {
    title: 'Across Collections & Renewals',
    stats: [
      { value: '30%', label: 'IMPROVEMENT IN RENEWALS' },
      { value: '20%', label: 'IMPROVEMENT IN COLLECTION RATE' },
    ],
  },
  {
    title: 'Across Sales',
    stats: [
      { value: '50%', label: 'IMPROVEMENT IN QUOTES' },
      { value: '5X', label: 'INCREASE IN PIPELINE' },
    ],
  },
  {
    title: 'Across Support',
    stats: [
      { value: '80%', label: 'REDUCTION IN SUPPORT TICKETS' },
      { value: '70%', label: 'IMPROVEMENT IN RESPONSE TIME' },
    ],
  },
];

export default function EnterpriseCard() {
  return (
    <div className="w-[50rem] flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg p-10">
      <div className="inline-block border border-gray-300 px-3 py-1 rounded-full text-xs font-light mb-4">
        What Matters At Qcall.ai
      </div>
      <h1 className="text-3xl font-semibold text-center mb-2">
        Proven Results, Real Impact
      </h1>
      <p className="text-gray-600 mb-6 text-center text-sm max-w-2xl mx-auto">
      WE'VE EMPOWERED BUSINESSES LIKE YOURS WITH REMARKABLE OUTCOMES
      </p>

      <div className="w-full rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex-1  flex flex-col justify-between text-center border border-[#00a7e6] p-5 rounded-2xl"
            >
              <div className="font-bold  mb-2 text-xl">{card.title}</div>
              {card.stats.map((stat, i) => (
                <div key={i} className="mb-4">
                  <div className="text-4xl font-bold text-[#00a7e6]">{stat.value}</div>
                  <div className="text-xs  mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
