// eslint-disable-next-line react/prop-types
export default function CardServices({ img, title, description, color }) {
  return (
    <div className=" flex flex-col border items-center relative bg-WHITE p-5 rounded-lg w-[90%] shadow-3xl ">
      <div
        className={`absolute top-[-61px] flex items-center justify-center polygon w-[69px] h-[80px] ${color}  `}
      >
        {img}
      </div>
      <div className="pt-2 pb-4">
        <h3 className="text-blue-900 font-bold break-w text-xl mb-4">{title}</h3>
        <p className="text-black-900 font-semibold">{description}</p>
      </div>
    </div>
  );
}
