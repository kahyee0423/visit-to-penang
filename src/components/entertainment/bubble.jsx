import React, { useEffect, useState } from "react";

const Bubble = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    // Generate random properties for position, size, duration, and delay
    const randomX = Math.floor(Math.random() * 100); // Random horizontal position
    const randomSize = Math.random() * 3 + 1; // Random size (1rem to 4rem)
    const randomDelay = Math.random() * 5; // Random animation delay
    const randomDuration = Math.random() * 10 + 5; // Random duration (5s to 15s)

    // Set style for individual bubble
    setStyle({
      left: `${randomX}vw`,
      width: `${randomSize}rem`,
      height: `${randomSize}rem`,
      backgroundColor: "rgba(255, 165, 0, 0.5)", // Light accent orange with transparency
      animation: `fallBubble ${randomDuration}s linear ${randomDelay}s infinite`,
    });
  }, []);

  return <div style={style} className="absolute rounded-full"></div>;
};

export default Bubble;