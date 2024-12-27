import { Title, Card1 } from "../components";
import touristData from "../data/tourist.json";

export const TouristSection = () => {
  const first3_touristData = touristData.slice(0,3)
  return (
    <section>
      <Title 
        title="Tourist Spots" 
        path="/tourist-spots"
      />

      <div className="flex flex-wrap justify-evenly md:justify-start gap-x-6 lg:gap-x-14 gap-y-10">
        {first3_touristData.map((spots)=>(
          <Card1 key={spots.id} spots={spots} />
        ))}
      </div>

    </section>
  )
}
  