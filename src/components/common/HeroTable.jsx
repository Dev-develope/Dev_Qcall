import { Database } from "lucide-react";
import React from "react";

const HeroTable = ({ data }) => {
  return (
    <div className="comparison-card  bg-white rounded-xl shadow-md border border-[#00a7e6]">
      {data.table && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                {Object.keys(data.table[0]).map((key) => (
                  <th
                    key={key}
                    className="px-4 py-2 text-left text-gray-700 font-bold"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.table.map((row, index) => (
                <tr key={index} className="bg-white">
                  {Object.values(row).map((value, idx) => (
                    <td
                    key={idx}
                    className={`px-4 py-2 text-left text-xs mt-5 text-gray-600 ${
                      idx === 0 ? 'font-semibold text-gray-800' : ''
                    }`}
                  >
                      <div className="flex">
                        <div>
                          {(idx === 1 || idx === 2) && (
                            <Database className="inline-block mr-2 text-[#00a7e6]" />
                          )}
                        </div>
                        <div>{value}</div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HeroTable;
