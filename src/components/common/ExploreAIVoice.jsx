"use client";
import Image from "next/image";
import audioPlayer from "../../../public/images/Ai voice/voicerecord.png";
// import audioPlayer1 from "../../../public/asset/eCommerce.wav";
import WavePlayer from "./WavePlayer";
import { useState } from "react";

export default function ExploreAIVoice() {
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Explore AI Voice
        </h1>

        {/* Search & Filters */}
        <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
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
              value={playbackRate}
              onChange={(e) => setPlaybackRate(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm whitespace-nowrap">{playbackRate}x</span>
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((agent) => (
            <div key={agent} className="bg-white p-4 rounded-lg shadow-md">
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
              {/* <Image
                                src={audioPlayer}
                                alt="Audio Player"
                                width={350}
                                height={50}
                                className="mb-2"
                            /> */}
              <WavePlayer
                audio="/assets/eCommerce.wav"
                playbackRate={playbackRate}
                index={0}
                currentPlayingIndex={currentPlayingIndex}
                setCurrentPlayingIndex={setCurrentPlayingIndex}
              />
              {/* Speed Controls */}
              <div className="flex gap-2 items-center mt-3">
                <span className="text-sm font-semibold">Speed</span>
                <div className="flex gap-2">
                  {["1x", "2x", "3x", "4x", "5x"].map((speed, index) => (
                    <button
                      onClick={() => {
                        setPlaybackRate(index + 1);
                      }}
                      key={speed}
                      className="text-sm px-2 py-1 bg-gray-200 rounded-full"
                    >
                      {speed}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
