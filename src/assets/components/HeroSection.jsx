
export const HeroSection = () => {
  return (
    <div className='flex justify-center pb-[130px]'>
      <div className='flex flex-col items-center gap-y-6'>
        {/* Header */}
        <p className='font-bold text-2xl sm:text-3xl md:text-4xl text-center'>
          Plan Your Trip to <span className="text-accent-blue">Penang</span> 
          <br/> All at Your <span className="text-accent-blue">Fingertips</span>
        </p>

        {/* Sub-header */}
        <p className='text-sm md:text-base'>Your journey begins here</p>

        {/* CTA Button */}
        <button type="button" className="text-white bg-accent-orange hover:bg-accent-orange-hover font-semibold rounded-lg text-md md:text-lg px-3.5 py-2.5 md:px-5 md:py-4 w-fit">
          Explore Now
        </button>

        {/* Image */}
        <div>
          <img className="h-auto max-w-sm lg:max-w-3xl md:max-w-xl sm:max-w-lg rounded-xl" src="images/mural.jpg" alt="Penang Mural"/>
        </div>
      </div>
    </div>
  )
}
