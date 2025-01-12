import React, { useState, useEffect } from "react";
import Card from "../components/Food/FoodCard";

export const Food = () => {
    const [foodData, setFoodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFoodData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/data/food-page.json');
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

    if (loading) {
        return <div>Loading food items...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!foodData || !foodData.foods) {
        return <div>No data available.</div>;
    }

    const { foods } = foodData;

    return (
        <div>
            <header className="bg-primary px-32 py-20 flex flex-col items-center gap-12 shadow-md">
                <h1 className="text-center text-4xl font-bold py-2.5 leading-relaxed font-sans tracking-wide">
                    Penang's{" "}
                    <span className="text-accent-orange font-bold">Top Picks</span>: Scrumptious{" "}
                    <span className="text-accent-blue font-bold">Food & Beverages</span>
                </h1>
                <p className="text-center max-w-3xl text-grey">
                    Penang, often hailed as the food capital of Malaysia, offers a vibrant culinary scene that blends flavors
                    from Malay, Chinese, Indian, and Peranakan influences. Here are some citations or highlights on Penang's
                    renowned food culture:
                </p>
            </header>

            <div className="flex flex-wrap justify-center gap-5 p-10 max-w-7xl mx-auto">
                {foods.map((food, index) => (
                    <Card
                        key={index}
                        title={food.title}
                        description={food.description}
                        image={food.image}
                        locations={food.locations}
                    />
                ))}
            </div>
        </div>
    );
};

export default Food;
