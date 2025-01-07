import { Routes, Route } from "react-router-dom";
import { Entertainment, Food, Home, TouristSpots } from "../pages";

export const AllRoutes = ()=>{
  return (
    <div>
        <Routes>
            <Route path="" element={<Home/>}></Route>
            <Route path="tourist-spots" element={<TouristSpots/>}></Route>
            <Route path="food" element={<Food/>}></Route>
            <Route path="entertainment" element={<Entertainment/>}></Route>
        </Routes>
    </div> //ok
  )
}
