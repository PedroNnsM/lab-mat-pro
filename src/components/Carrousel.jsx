import { Carousel, IconButton } from "@material-tailwind/react";

export function Carrousel() {
  const fotos = [
    {
      img: "https://i.ibb.co/NYB1Hsk/01.png",
      alt: "Imagem 1",
    },
    {
      img: "https://i.ibb.co/QHKNpLk/02.png",
      alt: "Imagem 1",
    },
    {
      img: "https://i.ibb.co/28ms9XW/04.png",
      alt: "Imagem 1",
    },
    {
      img: " https://i.ibb.co/3SDyhbL/05.png",
      alt: "Imagem 1",
    },
    {
      img: "https://i.ibb.co/r2ZDrzG/06.png",
      alt: "Imagem 1",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="flex">
        {fotos.map((item, index) => {
          return <img src={item.img} alt={item.alt} key={index} />;
        })}
      </div>
    </div>
  );
}
