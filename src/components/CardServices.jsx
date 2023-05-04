// eslint-disable-next-line react/prop-types
export default function CardServices({img, title, description}) {
  return (
    <div className=" flex flex-col border border-l-blue-500 p-5 rounded-lg">
      <img src={img} alt={title}  className="w-11"/>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
