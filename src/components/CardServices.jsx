
// eslint-disable-next-line react/prop-types
export default function CardServices({img, title, description,color}) {
  return (
    <div className=" flex flex-col border items-center relative border-l-blue-500 p-5 rounded-lg w-64 ">
      <div className={`absolute top-[-22px] flex items-center justify-center polygon w-12 h-12 ${color}`}>{img}</div>
      <div className="mt-8">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
