import teamData from "../data/team.json";

export const Team = () => {
    return (
      <div className="bg-primary" id="team">
        <section>
          <div className="flex text-2xl md:text-3xl font-bold mb-8">Our Team</div>

          <div className="flex max-[590px]:flex-wrap gap-x-4 gap-y-8 lg:gap-x-12">
            {teamData.map((member) => (
              <div key={member.name} className="flex flex-col basis-2/5 md:basis-1/5">
                <div className="h-[235px] w-full">
                  <img 
                    src={member.photo} 
                    alt={member.name + "Image"} 
                    className="h-full w-full object-top object-cover bg-pure-white rounded-xl shadow-lg"
                  />
                </div>  
                <p className="text-black text-sm md:text-base text-center mt-5">{member.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }