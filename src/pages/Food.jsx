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
           try{
             const response = await fetch("http://localhost:5000/api/food-page");
             if(!response.ok) {
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
   if (!foodData || !foodData.foods) {
         return <div>No data available.</div>;
   }

   const { foods } = foodData;

 // Header styles
 const headerStyles = {
   backgroundColor: "#FFECDE",
   padding: "80px 137px 16px 137px",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   gap: "48px",
   boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
 };

 // Title styles with comprehensive formatting
 const titleStyles = {
   textAlign: "center",
   fontSize: "2.5rem",      // Large, readable font size
   fontWeight: "bold",      // Make text bold
   margin: 0,
   padding: "10px 0",       // Add some vertical spacing
   lineHeight: "1.4",       // Improve line height for readability
   fontFamily: "'Arial', sans-serif",  // Specify font family
   letterSpacing: "0.5px",  // Slight letter spacing for clarity
   color: "#333333"         // Dark gray color for main text
 };

 const blueTextStyles = {
   color: "#4169E1",
   fontWeight: "bold"
 };

 // Colored text styles
 const orangeTextStyles = {
   color: "#FF8A2A"
 };

 // Description styles
 const descriptionStyles = {
   textAlign: "center",
   maxWidth: "800px",
   margin: 0
 };

 // Grid container styles
 const gridContainerStyles = {
   display: "flex",
   flexWrap: "wrap",
   justifyContent: "center",
   gap: "20px",
   padding: "40px 20px",
   maxWidth: "1200px",
   margin: "0 auto"
 };

 return (
   <div>
     <header style={headerStyles}>
       <h1 style={titleStyles}>
         Penang's <span style={orangeTextStyles}>Top Picks</span>: Scrumptious{" "}
         <span style={blueTextStyles}>Food & Beverages</span>
       </h1>
       <p style={descriptionStyles}>
         Penang, often hailed as the food capital of Malaysia, offers a vibrant culinary scene that blends flavors
         from Malay, Chinese, Indian, and Peranakan influences. Here are some citations or highlights on Penang's
         renowned food culture:
       </p>
     </header>

     <div style={gridContainerStyles}>
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