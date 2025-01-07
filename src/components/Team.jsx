import { useState, useEffect } from 'react';

export const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:5000/api/team');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTeamData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return <div>Loading team members...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
  );
};