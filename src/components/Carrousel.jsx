import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export function Carrousel() {
  const fotos = [
    {
      id: "1",
      img: "https://i.ibb.co/NYB1Hsk/01.png",
      alt: "Imagem 1",
    },

    {
      id: "2",
      img: "https://i.ibb.co/28ms9XW/04.png",
      alt: "Imagem 1",
    },
    {
      id: "3",
      img: " https://i.ibb.co/3SDyhbL/05.png",
      alt: "Imagem 1",
    },
    {
      id: "4",
      img: "https://i.ibb.co/r2ZDrzG/06.png",
      alt: "Imagem 1",
    }, // {
    //   id: "5",
    //   img: "https://i.ibb.co/QHKNpLk/02.png",
    //   alt: "Imagem 1",
    // },
  ];

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(fotos.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === fotos.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-75 `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {fotos.map((item) => {
          return (
            <img
              className="w-full h-full object-cover"
              src={item.img}
              alt={item.alt}
              key={item.id}
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          );
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex z-10 text-WHITE px-4 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div className=" absolute bottom-0 py-4 flex justify-center w-full gap-3">
        {fotos.map((s, i) => {
          return (
            <div
              onClick={() => goToSlide(i)}
              key={"circle" + i}
              className={` rounded-full w-5 h-5 cursor-pointer border border-blue-400 ${
                i == current ? "bg-blue-900 " : "bg-WHITE "
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
