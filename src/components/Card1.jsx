
export const Card1 = ({spots}) => {
    const {photo, title, openingHours, location} = spots;

    return (
    <div>
        <img 
          className="w-[340px] h-[320px] lg:w-[330px] lg:h-[310px] rounded-3xl mb-5 object-cover grow" 
          src={photo}
          alt={`${title} photo`}/>

        <div className="grid gap-y-2">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-grey text-base">{`Opening hours: ${openingHours}`}</p>
          <div className="flex flex-row mt-3">
            <img
              className="w-[17px] h-[22px] mr-3"
              alt="Location Icon"
              src="location-icon.svg"
            />
            <p className="text-base">{location}</p>
          </div>
        </div>

    </div>
    )
  }