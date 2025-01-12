import { useState, useEffect } from "react";
import { Title, Card1 } from "../components";

export const TouristSection = () => {
  const [touristData, setTouristData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTouristData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/data/tourist.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTouristData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTouristData();
  }, []);


  if (loading) {
     return <div>Loading tourist spots...</div>
 }
 if(error) {
   return <div>Error: {error.message}</div>
 }


 const first3_touristData = touristData.slice(0, 3);

  return (
    <section>
      <Title title="Tourist Spots" path="/tourist-spots" />

      <div className="flex flex-wrap justify-evenly md:justify-start gap-x-6 lg:gap-x-14 gap-y-10">
        {first3_touristData.map((spots) => (
          <Card1 key={spots.id} spots={spots} />
        ))}
      </div>
    </section>
  );
};