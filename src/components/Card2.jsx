
export const Card2 = ({food}) => {
    const {photo, title, description} = food;
    return (
      <div className="bg-secondary w-[300px] lg:w-[316px] shadow-lg rounded-[40px] p-6 lg:p-7">
        <div className="overflow-hidden rounded-[16px] mb-4">
          <img
            src={photo}
            alt={`${title} Image`}
            className="h-[296px] w-full object-cover"/>
        </div>
        
        <div className="text-start">
          <h2 className="font-bold text-lg mb-3">{title}</h2>
          <p className="italic text-grey text-sm max-w-[260px]">{description}</p>
        </div>
      </div>
    )
  }