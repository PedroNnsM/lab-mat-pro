// eslint-disable-next-line react/prop-types
export function Equipaments({ title, description, img, equipament }) {
  return (
    <div className="flex odd:flex-row-reverse">
      <div>
        <h2>{title}</h2>
        <p>{description} </p>
      </div>
      <div>
        <img src={img} alt={equipament} />
        <span>{equipament}</span>
      </div>
    </div>
  );
}
