import { useState, useEffect } from "react";
import { Title, Card2 } from "../components";

export const FoodSection = () => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:5000/api/food');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFoodData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

    if(loading) {
       return <div>Loading food items...</div>
    }
    if(error) {
        return <div>Error: {error.message}</div>
    }

    const first3_foodData = foodData.slice(0, 3);


  return (
    <section>
      <Title title="Food" path="/food" />

      <div className="flex flex-wrap justify-evenly md:justify-start gap-x-14 gap-y-10">
        {first3_foodData.map((food) => (
          <Card2 key={food.title} food={food} />
        ))}
      </div>
    </section>
  );
};