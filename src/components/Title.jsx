import { Link } from "react-router-dom"

export const Title = (props)=>{
  return (
    <div className="flex justify-between items-start">
        <div className="flex text-2xl md:text-3xl font-bold mb-8">{props.title}</div>

        <div className="inline-flex mt-4">
            <Link to={props.path} class="text-base md:text-lg hover:underline">Find more</Link>
            <img
                className="ml-3"
                alt="Next Icon"
                src="next-icon.svg"/>
        </div>
    </div>
  )
}


