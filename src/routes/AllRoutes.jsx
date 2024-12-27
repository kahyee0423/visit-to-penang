import { Routes, Route } from "react-router-dom";
import { Entertainment, Food, Home, TouristSpots } from "../pages";

export const AllRoutes = ()=>{
  return (
    <div>
        <Routes>
            <Route path="" element={<Home/>} title=""></Route>
            <Route path="tourist-spots" element={<TouristSpots/>} title=""></Route>
            <Route path="food" element={<Food/>} title=""></Route>
            <Route path="entertainment" element={<Entertainment/>} title=""></Route>
        </Routes>
    </div>
  )
}
