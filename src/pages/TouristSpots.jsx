import { HeroSection, About } from "../home-components";

export const TouristSpots = () => {
  return (
    <div className="font-sans">
      {/* Title */}
      <div className="container mx-auto text-center mt-4">
        <p className="text-xl md:text-2xl font-bold text-gray-700">
          Discover Hidden Gems: Explore Must-Visit Tourist Spots
        </p>
      </div>

      <div className="relative flex justify-center">
        <img src="./TouristSpots/PenangHill/cover.jpg" alt="Penang Landscape" className="w-1/2 h-70 object-cover" />
      </div>

      {/* Penang Hill Section */}
      <section className="py-12">
        <div className="container mx-auto text-center bg-purple-100">
          <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">PENANG HILL</h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          {/* Image Gallery */}
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            <div className="relative">
              <img src="./TouristSpots/PenangHill/Picture1.png" alt="Penang Hill 1" className="w-full" />
            </div>
            <div className="relative">
              <img src="./TouristSpots/PenangHill/Picture2.png" alt="Penang Hill 2" className="w-full" />
            </div>
            <div className="relative">
              <img src="./TouristSpots/PenangHill/Picture3.png" alt="Penang Hill 3" className="w-full -mt-10" />
            </div>
            <div className="relative">
              <img src="./TouristSpots/PenangHill/Picture4.png" alt="Penang Hill 4" className="w-full" />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col">
            <div className="relative mb-4">
              <img src="./TouristSpots/PenangHill/Picture5.png" alt="Penang Hill 5" className="w-full" />
            </div>
            <div className="md:col-span-1 md:text-left mt-8 md:mt-0">
              <h3 className="text-2xl font-bold text-gray-700 mb-5">Escape to the clouds at Penang Hill</h3>
              <p className="text-gray-600 mb-4 italic">where nature meets history! 🌱✨</p>
              <p className="text-gray-700 font-light italic mt-10">
                Penang Hill is a must-visit destination offering a serene escape from the bustling city. Perched high
                above George Town, it treats visitors to stunning panoramic views, cool refreshing air, and lush greenery.
              </p>

              {/* Contact Info */}
              <div className="flex items-center mt-9">
                <img className="h-4 mr-1" src="./TouristSpots/map-icon.png" alt="map icon" />
                <p className="text-gray-700 text-sm">11500 Air Itam, Pulau Pinang</p>
              </div>
              <div className="flex items-center mt-2">
                <img className="h-4 mr-1" src="./TouristSpots/phone-icon.png" alt="phone icon" />
                <p className="text-gray-700 text-sm">04-828 8880</p>
              </div>

              {/* Icon */}
              <div className="flex justify-end mt-10 pr-9">
                <img className="h-24" src="./TouristSpots/flutter-icon.png" alt="bluebird icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kampung Agong Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center bg-yellow-100">
          <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">KAMPUNG AGONG</h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-700 mb-2 text-left w-1/2 ml-10">Discover paradise at Kampung Agong</h3>
            <p className="text-gray-600 mb-4 text-left mt-8 italic ml-10">Rustic charm and picture-perfect views await! 📸🌴</p>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-20">
              <div className="relative mt-5">
                <img src="./TouristSpots/KampungAgong/Picture2.png" alt="Kampung Agong 1" className="w-full" />
              </div>
              <div className="relative">
                <img src="./TouristSpots/KampungAgong/Picture3.png" alt="Kampung Agong 2" className="w-full" />
              </div>
              <div className="relative mt-10">
                <img src="./TouristSpots/KampungAgong/Picture4.png" alt="Kampung Agong 3" className="w-full" />
              </div>
              <div className="relative">
                <img src="./TouristSpots/KampungAgong/Picture5.png" alt="Kampung Agong 4" className="w-full" />
              </div>
              <div className="relative mt-5">
                <img src="./TouristSpots/KampungAgong/Picture6.png" alt="Kampung Agong 5" className="w-full" />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-left font-light italic mt-20">
              Kampung Agong offers a serene escape into the heart of Malaysia's countryside. With its idyllic coconut
              groves, lush paddy fields, and traditional kampung vibes, it's the perfect spot to relax, reconnect with
              nature, and capture stunning photos.
            </p>
          </div>

          {/* Video */}
          <div className="relative md:text-left">
            <video src="./TouristSpots/KampungAgong/video.mp4" className="w-full rounded-md" controls>
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col mb-3">
            <div className="flex items-center mb-1">
              <img src="./TouristSpots/map-icon.png" className="w-3 h-3 mr-1" alt="map icon" />
              <p className="text-gray-600">13100 Penaga, Pulau Pinang</p>
            </div>
            <div className="flex items-center">
              <img src="./TouristSpots/phone-icon.png" className="w-3 h-3 mr-1" alt="phone icon" />
              <p className="text-gray-600">012-4817795</p>
            </div>
          </div>

          {/* Icon */}
          <div className="md:col-span-3 flex justify-end relative ml-7 sm:top-[-100px] md:top-[-150px] lg:top-[-180px]">
            <img className="h-52 md:h-40 sm:h-32" src="./TouristSpots/flutter-icon.png" alt="bluebird icon" />
          </div>
        </div>
      </section>

      {/* Chew Jetty Section */}
      <section className="py-12 -mt-20">
  <div className="container mx-auto text-center mb-10 bg-blue-100">
    <h2 className="text-3xl font-bold text-gray-800 uppercase inline-block py-1 px-2 rounded-sm">
      CHEW JETTY
    </h2>
  </div>

  <div className="container mx-auto flex flex-col md:flex-row gap-6 items-start">
    {/* Image and Contact Info */}
    <div className="w-full md:w-1/2 relative pb-[160px] sm:pb-0">
      <img src="./TouristSpots/ChewJetty/Picture1.png" alt="Chew Jetty Main" className="w-full" />
      <div
        className="absolute text-xs w-[200px] transform sm:translate-y-[150px] md:translate-y-0 left-10 sm:left-[auto] sm:right-10 md:left-10 md:right-auto"
      >
        {/* Contact Details */}
        <div className="relative mb-5">
          <div className="flex items-center mb-1">
            <img src="./TouristSpots/map-icon.png" className="w-3 h-3 mr-1" alt="map icon" />
            <p className="text-gray-600 md:whitespace-nowrap">Georgetown, 10300 George Town, Penang</p>
          </div>
          <div className="flex items-center mb-3">
            <img src="./TouristSpots/phone-icon.png" className="w-3 h-3 mr-1" alt="phone icon" />
            <p className="text-gray-600">011-624 62884</p>
          </div>
        </div>

        {/* Icon */}
        <div className="w-full justify-start relative pt-20 sm:pt-10 md:pt-0  md:block hidden">
          <img
            className="h-40 relative sm:top-[20%] md:top-[25%] lg:top-[40%] xl:top-[50%]"
            src="./TouristSpots/flutter-left.png"
            alt="bluebird icon"
          />
        </div>
      </div>
    </div>

    {/* Description and Images */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-bold text-gray-700 mb-2 text-left w-1/2 ml-10">Step back in time at Chew Jetty</h3>
      <p className="text-gray-600 mb-4 text-left italic relative top-8 ml-7">
        Where rich history truly floats! 🏘️🌊
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-20">
        <div className="relative p-0 mt-4">
          <img src="./TouristSpots/ChewJetty/Picture2.png" alt="Chew Jetty 1" className="w-full" />
        </div>
        <div className="relative mt-9">
          <img src="./TouristSpots/ChewJetty/Picture3.png" alt="Chew Jetty 2" className="w-full" />
        </div>
        <div className="relative p-0">
          <img src="./TouristSpots/ChewJetty/Picture4.png" alt="Chew Jetty 3" className="w-full" />
        </div>
        <div className="relative mt-9">
          <img src="./TouristSpots/ChewJetty/Picture5.png" alt="Chew Jetty 4" className="w-full" />
        </div>
        <div className="relative mt-2">
          <img src="./TouristSpots/ChewJetty/Picture6.png" alt="Chew Jetty 5" className="w-full" />
        </div>
      </div>
      <p className="text-gray-700 text-left mt-8 font-light italic">
        Chew Jetty is a living heritage site that offers a glimpse into Penang's rich history and culture. This
        charming waterfront settlement, with its wooden stilt houses and vibrant community, tells the story of
        Chinese immigrants who settled here generations ago.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

