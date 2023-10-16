// eslint-disable-next-line react/prop-types
export function CardHorizontal({ title, description }) {
  return (
    <div
      className={`group bg-blue-800 bg-center bg-cover  p-8 hover:bg-banner-svg flex hover:bg-opacity-75 flex-col items-center justify-center transition-all relative text-WHITE
      h-56
      `}
    >
      <h3 className="block mb-4 transition-all duration-500 font-bold text-xl group-hover:hidden 
       ">
        {title}
      </h3>
      <span className="hidden font-semibold group-hover:block transition-opacity duration-500 ">
        {description}
      </span>
    </div>
  );
}
