import { useState, useEffect } from "react";
import { Title, Card1 } from "../components";

export const EntertainmentSection = () => {
    const [entertainmentData, setEntertainmentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEntertainmentData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/data/entertainment.json');
                if (!response.ok) {
                     throw new Error(`HTTP error! status: ${response.status}`);
                 }
                const data = await response.json();
                setEntertainmentData(data);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchEntertainmentData();
    }, []);

     if(loading) {
        return <div>Loading entertainment spots...</div>
    }

    if(error) {
       return <div>Error: {error.message}</div>
    }

    const first3_entertainmentData = entertainmentData.slice(0,3);

    return (
    <div className="bg-primary">
        <section>
        <Title 
            title="Entertainment" 
            path="/entertainment"
        />
        
        <div className="flex flex-wrap justify-evenly md:justify-start gap-x-6 lg:gap-x-14 gap-y-10">
            {first3_entertainmentData.map((entertainment) => (
            <Card1 key={entertainment.title} spots={entertainment}/>
            ))}
        </div>
        </section>
    </div>
    )
};