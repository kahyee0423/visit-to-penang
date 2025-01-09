import React from 'react';

export const VideoSection = ({ 
  videoSrc = "./Video.mp4",  
  className = "video",
}) => {
  return (
    <div className={`relative ${className} flex justify-center items-center p-12`}> {/* Added padding */}
      <video 
        className="w-1/8 h-auto max-w-full sm:max-w-1/3 md:max-w-1/5 lg:max-w-1/6 shadow-lg"  // Even smaller video sizes
        autoPlay 
        loop 
        controls
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
