export default function CardServices(img, title, description) {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
