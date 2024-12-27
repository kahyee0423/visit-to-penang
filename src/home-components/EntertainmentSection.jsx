import { Title, Card1 } from "../components";
import entertainmentData from "../data/entertainment.json";

export const EntertainmentSection = () => {
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
  }