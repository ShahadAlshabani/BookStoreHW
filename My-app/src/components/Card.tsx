
interface CardItems{
    id:string,
    title:string,
    image: string,
    author:string,
    summary:string
}


export const Card = (props:CardItems) => {
  return (
    <div>
        <a href={`/book/${props.id}`}>
        <div className="block w-[26rem] h-[36rem] rounded-lg border border-warning bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:border-fuchsia-900 dark:bg-neutral-300 hover:scale-110">
            <div className="border-b-2 border-[#0000002d] px-6 py-3 text-neutral-600 dark:text-black text-center font-bold text-xl">
             {props.title}
            </div>
            <div className="p-6 flex flex-col items-center justify-center">
             <img src={props.image} alt={props.title} className="mb-4 rounded-lg h-48 w-full object-cover md:h-full md:w-48 max-sm:h-full max-sm:w-48 " />
            <h5 className="mb-2 text-xl font-medium leading-tight text-warning dark:text-fuchsia-900 text-right">
            {props.author}
            </h5>
            <p className="text-base dark:text-fuchsia-800 text-right">
            {props.summary}
            </p>
        </div>
    </div>
    </a>
 </div>
  )
}
