import { useState, useRef, useEffect } from "react";
import BubbleContainer from "../components/entertainment/bubbleContainer";

export const Entertainment = () => {
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [currentImageIndices, setCurrentImageIndices] = useState([]);
  const sectionRefs = useRef([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntertainmentData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/data/entertainment-page.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEntertainmentData(data);
        setCurrentImageIndices(data.map(() => 0));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntertainmentData();
  }, []);

  const goToImage = (sectionIndex, direction) => {
    setCurrentImageIndices((prev) =>
      prev.map((current, index) =>
        index === sectionIndex
          ? (current + direction + entertainmentData[sectionIndex].photo.length) %
            entertainmentData[sectionIndex].photo.length
          : current
      )
    );
  };

  const renderOperatingHours = (hours) => {
    if (hours.mondayToFriday) {
      return (
        <>
          <p>
            <strong>Monday to Friday:</strong> {hours.mondayToFriday}
          </p>
          <p>
            <strong>Saturday, Sunday & Public Holidays:</strong>{" "}
            {hours.weekendsAndHolidays}
          </p>
        </>
      );
    }
    return <p>{hours.everyday}</p>;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
        }
      });
    }, { threshold: 0.2 });

    if (sectionRefs.current) {
      sectionRefs.current.forEach((section, index) => {
        if (index !== 0) {
          observer.observe(section);
        } else {
          section.classList.add("opacity-100", "translate-y-0");
        }
      });
    }

    return () => {
      if (observer) {
        sectionRefs.current.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, [entertainmentData]);

  if (loading) {
    return <div>Loading Entertainment Data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="relative">
      <BubbleContainer />
      <div className="relative z-10">
        <div className="text-center px-4 md:px-6">
          <h1 className="text-xl md:text-3xl font-bold text-black-700">
            Penang's <span className="text-accent-orange">Top Picks</span>:{" "}
            <span className="text-accent-blue">Entertainment</span> at Its Best
          </h1>
          <p className="mt-2 text-black-500 text-sm md:text-base">
            From Thrills and Adventures to Cultural Marvels – Explore Penang’s
            Must-Visit Entertainment Spots!
          </p>
        </div>

        <div className="mt-8 px-6 md:px-8 max-w-6xl mx-auto">
          {entertainmentData.map((item, sectionIndex) => (
            <section
              key={sectionIndex}
              ref={(el) => (sectionRefs.current[sectionIndex] = el)}
              className="p-6 md:p-8 rounded-lg shadow-md transition-all duration-500 mt-8 opacity-0 transform translate-y-4"
            >
              <div className="relative w-full h-96 md:h-112 mb-2">
                <img
                  src={item.photo[currentImageIndices[sectionIndex]]}
                  alt={`Image of ${item.title}`}
                  className="w-full h-full object-cover rounded-base"
                />
                <button
                  onClick={() => goToImage(sectionIndex, -1)}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center p-2 rounded-full font-bold"
                >
                  ❮
                </button>
                <button
                  onClick={() => goToImage(sectionIndex, 1)}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center p-2 rounded-full font-bold"
                >
                  ❯
                </button>
              </div>

              <div className="text-black-800">
                <h2 className="text-2xl font-bold text-center text-accent-orange mb-2">
                  {item.title}
                </h2>
                <p className="italic text-center text-lg leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-base font-semibold mb-3">
                    Highlight Activities:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-base">
                    {item.highlights.map((activity, i) => (
                      <li key={i}>
                        <strong>{activity.activity}:</strong>{" "}
                        {activity.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-base font-semibold mb-1 flex items-center">
                    <i className="fas fa-clock mr-2"></i> Operating Hours:
                  </h3>
                  <p className="text-base">
                    {renderOperatingHours(item.operatingHours)}{" "}
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-1 flex items-center">
                    <i className="fas fa-map-marker-alt text-lg mr-2"></i>
                    <a
                      href={item.locationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue underline"
                    >
                      Location
                    </a>
                  </h3>
                  <p className="text-base">
                    {item.location}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
