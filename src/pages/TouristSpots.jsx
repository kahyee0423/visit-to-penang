import React, { useState, useEffect } from 'react';

export const TouristSpots = () => {
    const [touristSpots, setTouristSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTouristSpots = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/data/tourist-spots-data.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTouristSpots(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTouristSpots();
    }, []);

    if (loading) {
        return <div>Loading Tourist Spots...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section>
            {/* Title */}
            <div className="container mx-auto text-center">
                <p className="text-3xl md:text-2xl font-bold mb-8">
                    Discover Hidden Gems: Explore Must-Visit Tourist Spots
                </p>
            </div>
            {touristSpots.map((spot, index) => (
                <div key={index}>
                    <div className="relative flex justify-center">
                        <img src={spot.coverImage} alt="" className="w-1/2 h-70 object-cover" />
                    </div>

                    <div className="py-12">
                        <div className="container mx-auto text-center bg-purple-100">
                            <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">{spot.name}</h2>
                        </div>

                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                            {/* Image Gallery */}
                            <div className="md:col-span-3 grid grid-cols-2 gap-4">
                                {spot.images.slice(0, 4).map((image, i) => (
                                    <div className="relative" key={i}>
                                        <img src={image} alt={`${spot.name} ${i + 1}`} className="w-full" />
                                    </div>
                                ))}
                            </div>
                            {/* Description */}
                            <div className="md:col-span-2 flex flex-col">
                                <div className="relative mb-4">
                                    <img src={spot.images[4]} alt={`${spot.name}`} className="w-full" />
                                </div>
                                <div className="md:col-span-1 md:text-left mt-8 md:mt-0">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-5">Discover {spot.name}</h3>
                                    <p className="text-gray-600 mb-4 italic">where nature meets history! 🌱✨</p>
                                    <p className="text-gray-700 font-light italic mt-10">
                                        {spot.description}
                                    </p>

                                    {/* Contact Info */}
                                    <div className="flex items-center mt-9">
                                        <img className="h-4 mr-1" src="./TouristSpots/map-icon.png" alt="map icon" />
                                        <p className="text-gray-700 text-sm">{spot.contact.address}</p>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <img className="h-4 mr-1" src="./TouristSpots/phone-icon.png" alt="phone icon" />
                                        <p className="text-gray-700 text-sm">{spot.contact.phone}</p>
                                    </div>

                                    {/* Icon */}
                                    <div className="flex justify-end mt-10 pr-9">
                                        <img className="h-24" src={spot.icon} alt="bluebird icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
