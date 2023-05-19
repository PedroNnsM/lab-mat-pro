// eslint-disable-next-line react/prop-types
export function Equipaments({ title, description, img, equipament }) {
  return (
    <div className="flex odd:flex-row-reverse gap-10 mb-10">
      <div className="w-4/5 flex flex-col  justify-center">
        <h2 className="text-black-900 font-semibold text-xl ">{title}</h2>
        <p className="mt-4">{description} </p>
      </div>
      <div className="flex flex-col items-center">
        <img className="" src={img} alt={equipament} />
        <span className="text-xs w-2/3 mt-4 block">{equipament}</span>
      </div>
    </div>
  );
}
