import { Title, Card2 } from "../components";
import foodData from "../data/food.json";


export const FoodSection = () => {
    const first3_foodData = foodData.slice(0,3);

    return (
      <section>
        <Title 
          title="Food" 
          path="/food"
        />

        <div className="flex flex-wrap justify-evenly md:justify-start gap-x-14 gap-y-10">
          {first3_foodData.map((food) => (
            <Card2 key={food.title} food={food}/>
          ))}
        </div>
      </section>
    )
  }