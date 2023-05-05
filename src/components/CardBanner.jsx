// eslint-disable-next-line react/prop-types
export function CardBanner({ heigth, width, title, description }) {
  return (
    <div
      className={`polygon ${heigth} ${width} bg-blue-800 bg-center hover:bg-banner-svg flex flex-col items-center justify-center`}
    >
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
}
