import { twMerge } from "tailwind-merge"
import useFetchData from "../../hooks/useFetchData"
import Loader from "../Loader"

const Marquee = () => {
  const url = 'https://nordic-rose-api.onrender.com/tags';
  const { data, isLoading } = useFetchData(url, 'tags') 
  if (isLoading) {
    return <Loader/>
  }

  return (
    <div className="flex items-end gap-8 overflow-x-auto w-auto">
      <div className=" animate-marquee w-full whitespace-nowrap flex items-end font-sans gap-4 justify-around">
          {data?.data.map((tag,index) => (
            <span
              key={tag.id}
              className={twMerge([
                  "flex-1 uppercase text-white w-full text-2xl",
                  index%2===0 ? "font-bold" : "font-extralight"
              ])}>{ tag.title }</span>
      ))}
      </div>
      <div className="translate animate-marquee2 w-full whitespace-nowrap flex items-center font-sans gap-4 justify-around">
          {data?.data.map((tag,index) => (
            <span
              key={tag.id}
              className={twMerge([
                  "flex-1 uppercase text-white w-full text-2xl",
                  index%2===0 ? "font-bold" : "font-extralight"
              ])}>{ tag.title }</span>
      ))}
    </div>
      </div>
  )
}

export default Marquee
