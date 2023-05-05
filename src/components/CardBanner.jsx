// eslint-disable-next-line react/prop-types
export function CardBanner({ title, description }) {
  return (
    <div
      className={`polygon group bg-blue-800 bg-center p-8 hover:bg-banner-svg flex flex-col items-center justify-center transition-all relative text-WHITE
      w-[250px] h-[300px] 
      md:w-[20rem] md:h-[22rem] 
      `}
    >
      <h3 className="block absolute group-hover:translate-y-100 transition-all duration-500 group-hover:opacity-0 p-8 font-bold text-xl ">
        {title}
      </h3>
      <span className="font-semibold opacity-0  group-hover:opacity-100 transition-opacity duration-500 ">
        {description}
      </span>
    </div>
  );
}
