"use client";
import Image from "next/image";
import audioPlayer from "../../../public/images/Ai voice/voicerecord.png";
// import audioPlayer1 from "../../../public/asset/eCommerce.wav";
import WavePlayer from "./WavePlayer";
import { useState } from "react";
import { Search } from "lucide-react";

export default function ExploreAIVoice() {
  const [playbackRates, setPlaybackRates] = useState({});
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [globalSpeed, setGlobalSpeed] = useState(1);   // for indivisual plyer speed controller

  const agents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const filteredAgents = agents.filter((agent) =>
    `Agent${agent}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSpeedChange = (index, rate) => {
    setPlaybackRates((prev) => ({ ...prev, [index]: rate }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Explore AI Voice
        </h1>

        {/* Search & Filters */}
        <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex-1 min-w-[200px] relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded-lg"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
              <Search />
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <select className="w-full p-2 border border-gray-300 rounded-lg">
              <option>Select Content</option>
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Custom Text"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex-1 min-w-[200px] flex items-center gap-2">
            <span className="text-sm whitespace-nowrap">Speed</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={globalSpeed}
              onChange={(e) => {
                const value = Number(e.target.value);
                setGlobalSpeed(value);
                if (currentPlayingIndex !== null) {
                  handleSpeedChange(currentPlayingIndex, value);
                }
              }}
              className="w-full"
            />
            <span className="text-sm whitespace-nowrap">{globalSpeed}x</span>
          </div>
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap gap-4 mt-4 w-1/2">
          <select className="flex-1 p-2 border border-gray-300 rounded-lg">
            <option>Gender</option>
          </select>
          <select className="flex-1 p-2 border border-gray-300 rounded-lg">
            <option>Language</option>
          </select>
          <select className="flex-1 p-2 border border-gray-300 rounded-lg">
            <option>License</option>
          </select>
        </div>

        {/* AI Voice Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {filteredAgents?.map((agent, ind) => (
            <div key={agent} className="bg-white p-4 rounded-2xl shadow-lg  transition-all ease-in-out duration-500 hover:scale-105">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-light">Agent {agent}</h3>
                <span className="border text-xs px-2 py-1 rounded-full">
                  English
                </span>
              </div>
              <p className=" text-xs my-3">
                The quick brown fox jumps over the lazy dog
              </p>

              {/* Audio Player Placeholder */}

              <WavePlayer
                audio="/assets/eCommerce.wav"
                playbackRate={playbackRates[ind] || 1}
                index={ind}
                currentPlayingIndex={currentPlayingIndex}
                setCurrentPlayingIndex={setCurrentPlayingIndex}
              />
              {/* Speed Controls */}
              <div className="flex gap-2 items-center mt-3">
                <span className="text-sm font-semibold">Speed</span>
                <div className="flex gap-2">
                  {["1x", "2x", "3x", "4x", "5x"].map((speed, i) => {
                    const value = i + 1;
                    const isActive = (playbackRates[ind] || 1) === value;

                    return (
                      <button
                        key={speed}
                        onClick={() => {
                          handleSpeedChange(ind, value);
                          setCurrentPlayingIndex(ind);
                          setGlobalSpeed(value);
                        }}                        
                        className={`text-sm px-2 py-1 rounded-full transition-all duration-150 ${
                          isActive
                            ? "bg-[#00a7e6] text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {speed}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
