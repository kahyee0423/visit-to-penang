import React from "react";
import Bubble from "./bubble";

const BubbleContainer = ({ numberOfBubbles = 20 }) => {
  const bubbles = Array.from({ length: numberOfBubbles }); // Generate the specified number of bubbles

  return (
    <div className="bubble-container">
      {bubbles.map((_, index) => (
        <Bubble key={index} />
      ))}
    </div>
  );
};

export default BubbleContainer;