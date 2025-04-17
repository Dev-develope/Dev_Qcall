import React from "react";

const ConnectwithTeams = ({ data }) => {
    return (
        <div className="bg-white text-center pt-10">
            {/* Label */}
            {data.label && (
                <div className="inline-block border border-[#00a7e6] px-3 py-1 rounded-full text-xs font-light mb-1">
                    {data.label}
                </div>
            )}

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {data.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
                {data.description}
            </p>
        </div>
    );
};

export default ConnectwithTeams;
