import { CheckCircle, CircleCheck } from 'lucide-react';
import React from 'react';

const ecosystemData = [
  {
    title: 'Renewal, Retention & Collections',
    description: 'Enable collection agencies to streamline and expedite invoice recovery.',
    useCases: [
      'Handling pre-due dates to deter delinquent collections with the right party contact and payment commitment.',
      'Manage renewals for subscription products/ services.',
      'Implement reactive and predictive retention programs.',
    ],
  },
  {
    title: 'Sales and Marketing',
    description: 'Replicating your top sales executives for significant revenue impact.',
    useCases: [
      'Managing cold outreach, interest-to-lead, and lead-to-order conversions.',
      'Reaching out to non-contactable leads and reactivating dormant leads.',
      'Upselling/cross-selling to existing installations, as well as cross-selling and upselling to CLV and ARPU improvement.',
    ],
  },
  {
    title: 'Customer Support',
    description:
      'Emulating your best support executives to ensure comprehensive containment and higher CSAT.',
    useCases: [
      'Providing inbound and outbound customer support for L1, L2 and L3 queries.',
      'Generating revenue through support instances and collecting feedback.',
    ],
  },
];

export default function ContactCenterEcosystem() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 mt-5 ">
      <div className="flex flex-col items-center mb-8">
        <span className="inline-block text-xs px-3 py-1 rounded-full border mb-4">
          Partner Ecosystem
        </span>
        <h1 className="text-3xl font-bold text-center mb-2">
          Enhancing the $450 billion contact
          <br />
          center ecosystem
        </h1>
        <p className="text-sm  text-center">
          covering the entire customer lifecycle to meet your diverse business requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch ">
        {ecosystemData.map((item, index) => (
          <div
            key={index}
            className="border border-[#00a7e6] rounded-lg p-6 flex flex-col justify-between h-full shadow-xl"
          >
            <div>
              <h2 className="font-bold text-lg mb-1">{item.title}</h2>
              <p className="text-xs text-gray-600 mb-4">{item.description}</p>

              <h3 className="text-sm font-light text-sm mb-2">Use Cases</h3>
              <div className="space-y-4">
                {item.useCases.map((useCase, i) => (
                  <div className="flex items-start gap-2" key={i}>
                    <div className="text-[#00a7e6] flex-shrink-0"><CircleCheck/></div>
                    <p className="text-xs">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
