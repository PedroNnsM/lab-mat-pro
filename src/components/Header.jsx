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
    <header className="flex  flex-col  justify-center items-center w-full ">
      <img className="w-[25rem]" src={Logo} alt="" />
      {open ? (
        <RiCloseFill
          className="lg:hidden block h-8 w-8 text-WHITE cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <FiMenu
          className="lg:hidden block h-8 w-8 text-WHITE cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      )}
      <nav>
        <ul className="flex gap-6 mt-[-20px] mb-10 sm:flex-col lg:flex-row md:flex-row ">
          {navList.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={`/${item.name}`}
                  className="text-WHITE hover:text-opacity-60 font-sans	"
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
