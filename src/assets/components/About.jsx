

export const About = () => {
  return (
    <div className="">
        <div>
            <h1 className="text-3xl font-bold">Find Your Next Adventure in Penang</h1>
        </div>
        <div className="">
            <div className="flex justify-between">
            <p className="flex items-center w-[500px] h-auto text-sm leading-8">Penang is situated on the northwest side of the Peninsular Malaysia,which also known as 'Pearl of the Orient'. Penang showcases a rich tapestry of cultural heritage, vibrant street art, tantalizing cuisines, and breathtaking landscapes. It also has an eventful history which can be indicated through the diversity of inhabitants. </p>
            <div className="bg-pure-white shadow-lg w-[500px] h-[280px] relative">
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[380px]" src="images/penang-bridge.jpg" alt="image description"/>
            </div>
            </div>
        </div>
    </div>
  )
}
