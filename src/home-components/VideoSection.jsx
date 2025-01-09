import React from 'react';

export const VideoSection = ({ 
  videoSrc = "./Video.mp4",  
  className = "video",
}) => {
  return (
    <div className='bg-primary'> {/* Added padding */}
      <section>
        <div className="flex text-2xl md:text-3xl font-bold mb-8">A Glimpse of Penang's Wonder</div>
        <div className={`relative ${className} flex justify-center items-cente`}>
          <video 
            className="w-1/8 h-auto max-w-full sm:max-w-1/3 md:max-w-1/5 lg:max-w-1/6 shadow-2xl rounded-xl"  // Even smaller video sizes
            loop 
            controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};
