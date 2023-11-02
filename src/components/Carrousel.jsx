import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

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
    <div className="flex items-center justify-center mx-4 max-w-6xl  max-h-[400px] relative">
      <BsArrowLeftCircleFill className="absolute" />
      {fotos.map((item, idx) => {
        return (
          <img
            className="w-full h-full"
            src={item.img}
            alt={item.alt}
            key={idx}
          />
        );
      })}
      <BsArrowRightCircleFill />
      <span className="">
        {fotos.map((_, idx) => {
          return (
            <button key={idx} onClick={null}>
              {" "}
            </button>
          );
        })}
      </span>
    </div>
  );
}
