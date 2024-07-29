// src/Components/AnimeGirl/AnimeGirl.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import soundFile from "./01OniiChan.mp3";
import imageFile from "./01Anigrl.gif";

const ImageContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
`;

function AnimeGirl() {
  const [show, setShow] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      if (audioPlayed) {
        const audio = new Audio(soundFile);
        audio.play().catch((error) => {
          console.log("Audio play failed:", error);
          // Handle the case where autoplay is blocked
        });
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [audioPlayed]);

  const handlePlaySound = () => {
    setAudioPlayed(true);
    const audio = new Audio(soundFile);
    audio.play().catch((error) => {
      console.log("Audio play failed:", error);
      // Handle the case where autoplay is blocked
    });
  };

  return (
    <>
      {show && (
        <ImageContainer>
          <img src={imageFile} alt="Special" />
          {!audioPlayed && (
            <PlayButton onClick={handlePlaySound}>Play Sound</PlayButton>
          )}
        </ImageContainer>
      )}
    </>
  );
}

export default AnimeGirl;
