import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

export function Header() {
  const [open, setOpen] = useState();
  const navList = [
    {
      id: "1",
      name: "",
      text: "Home",
    },
    {
      id: "2",
      name: "quem-somos",
      text: "Quem somos",
    },
    {
      id: "3",
      name: "equipe",
      text: "Equipe",
    },
    {
      id: "4",
      name: "servicos",
      text: "Serviços",
    },
    {
      id: "5",
      name: "treinamentos",
      text: "Treinamentos",
    },
    {
      id: "6",
      name: "projetos",
      text: "Projetos",
    },
    {
      id: "7",
      name: "publicacoes",
      text: "Publicações",
    },
    {
      id: "8",
      name: "clientes",
      text: "Clientes",
    },
    {
      id: "9",
      name: "contato",
      text: "Contato",
    },
  ];

  return (
    <header className="flex  flex-col  justify-center items-center max-w-6xl ">
      <img className="w-[25rem]" src={Logo} alt="" />
      <div className="block mb-8 ">
        {open ? (
          <RiCloseFill
            className="block h-8 w-8 text-WHITE cursor-pointer absolute right-6 top-10
          lg:hidden 
          "
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FiMenu
            className="block h-8 w-8 text-WHITE cursor-pointer absolute right-6 top-10
          lg:hidden 
          "
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      <nav
        className={` gap-6 items-center  mt-[-20px] mb-10 flex-col transition-all duration-500 lg:flex-row delay-75 xl:flex-row wrap hidden lg:flex`}
      >
        {navList.map((item) => {
          return (
            <a
              key={item.id}
              href={`/${item.name}`}
              className="text-WHITE p-3 hover:bg-blue-900 rounded-lg hover:text-opacity-80 font-bold font-sans transition-all duration-500	"
            >
              {item.text}
            </a>
          );
        })}
      </nav>
      <div>
        
      </div>
    </header>
  );
}
