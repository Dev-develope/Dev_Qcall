'use client';

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: '#e1b6c9',
  progressColor: '#2f9fd3',
  cursorColor: '#2f9fd3',
  barWidth: 3,
  barRadius: 2,
  responsive: true,
  height: 50,
  normalize: true,
  backend: 'MediaElement',
});

export default function AudioPlayer({ audioUrl }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveformRef.current && !wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create(formWaveSurferOptions(waveformRef.current));
      wavesurfer.current.load(audioUrl);

      wavesurfer.current.on('ready', () => {
        // Optional: autoplay or callback
      });

      wavesurfer.current.on('play', () => setIsPlaying(true));
      wavesurfer.current.on('pause', () => setIsPlaying(false));
    }

    return () => wavesurfer.current?.destroy();
  }, [audioUrl]);

  const handlePlayPause = () => {
    wavesurfer.current.playPause();
  };

  return (
    <div className="flex items-center bg-black rounded-full shadow-md px-4 py-2 w-[400px]">
      <button
        className={`w-8 h-8 border-2 rounded-full flex items-center justify-center mr-4 ${
          isPlaying ? 'border-[#9c2d6e]' : 'border-[#9c2d6e]'
        }`}
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <div className="w-[10px] h-[14px] bg-[#9c2d6e] relative before:absolute before:w-[4px] before:h-full before:left-0 before:bg-white after:absolute after:w-[4px] after:h-full after:right-0 after:bg-white" />
        ) : (
          <div className="ml-[2px] border-l-[12px] border-y-[7px] border-y-transparent border-l-[#9c2d6e]" />
        )}
      </button>
      <div className="w-full" ref={waveformRef} />
    </div>
  );
}
