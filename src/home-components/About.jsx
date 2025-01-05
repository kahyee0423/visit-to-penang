export const About = () => {
  return (
    <div id="about">
      <section className="text-center lg:text-left">
          <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3 lg:mb-0">Find Your Next Adventure in Penang</h1>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-y-5 lg:gap-y-0">
              <p className="text-xs md:text-sm !leading-8 w-full max-w-[500px] h-auto lg:flex lg:items-center">Penang is situated on the northwest side of the Peninsular Malaysia,which also known as 'Pearl of the Orient'. Penang showcases a rich tapestry of cultural heritage, vibrant street art, tantalizing cuisines, and breathtaking landscapes. It also has an eventful history which can be indicated through the diversity of inhabitants. 
              </p>
              <div className="bg-pure-white shadow-lg w-full max-w-[500px] h-[280px] relative md:shrink-0">
                  <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[380px]" src="penang-bridge.jpg" alt="Penang Bridge"/>
              </div>
          </div>
      </section>
    </div>
  )
}
