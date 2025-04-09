"use client"; // Make sure this is a client component

import React, { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
// import audioPlay from "../../../public/assets/E-commerce_audio_d7048e74df71fecb.wav"
const WavePlayer = ({ audio, index, currentPlayingIndex, setCurrentPlayingIndex,hight=20 }) => {
  const containerRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [isPlaying, toggleIsPlaying] = useState(false);
  const [audioExists, setAudioExists] = useState(false);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      height: hight,
      barWidth: 3,
      barRadius: 1,
      cursorWidth: 1,
      waveColor: "#95d1e8",
      progressColor: "#06749d",
      cursorColor: "transparent",
    });

    waveSurferRef.current = waveSurfer;

    return () => {
      waveSurfer.destroy();
      waveSurferRef.current = null;
    };
  }, []);

  useEffect(() => {
    const checkAudioExists = async () => {
      try {
        const response = await fetch(audio, { method: "HEAD" });
        if (response.ok) {
          setAudioExists(true);
          waveSurferRef.current.load(audio);
        } else {
          setAudioExists(false);
        }
      } catch (error) {
        console.log(error);
        setAudioExists(false);
      }
    };

    checkAudioExists();
  }, [audio]);

  useEffect(() => {
    if (currentPlayingIndex !== index && isPlaying) {
      waveSurferRef.current?.pause();
      toggleIsPlaying(false);
    }
  }, [currentPlayingIndex, index, isPlaying]);

  const handlePlayPause = () => {
    if (currentPlayingIndex !== index) {
      if (currentPlayingIndex !== null && waveSurferRef.current) {
        waveSurferRef.current.pause();
      }
      setCurrentPlayingIndex(index);
      waveSurferRef.current?.play();
      toggleIsPlaying(true);
    } else {
      waveSurferRef.current?.playPause();
      toggleIsPlaying(waveSurferRef.current?.isPlaying() || false);
    }
  };

  return (
    <div
      style={{
        display: audioExists ? "grid" : "flex",
        gridTemplateColumns: audioExists ? "40px 1fr" : "auto",
        alignItems: "center",
        justifyContent: audioExists ? "start" : "center",
        border: "2px solid #00a7e6",
        padding: "5px 16px",
        borderRadius: "100px"
      }}
    >
      {audioExists ? (
        <div
          onClick={handlePlayPause}
          style={{
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          {isPlaying ? (
            <FaPauseCircle style={{ height: "20px", width: "20px", color: "#00a7e6" }} />
          ) : (
            <FaPlayCircle style={{ height: "20px", width: "20px", color: "#00a7e6" }} />
          )}
        </div>
      ) : (
        "-"
      )}
      <div ref={containerRef} style={{ width: "100%" }} />
    </div>
  );
};

export default WavePlayer;
