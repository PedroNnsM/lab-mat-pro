import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {  NavLink } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState();
  const navLinks = [
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
  const navLinks2 = [
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

  const handleMenuOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <header className="flex  flex-col  justify-center items-center max-w-6xl  ">
      <a
        href="https://api.whatsapp.com/send/?phone=48991505190&text&type=phone_number&app_absent=0"
        className="fixed top-[40%] right-2 bg-green-300 p-2.5 rounded-full shadow-2.5xl z-20 hover:scale-110"
      >
        <BsWhatsapp size={"25px"} fill="#fff" />
      </a>
      <img className="w-[65%] h-32 lg:w-[450px]" src={Logo} alt="" />
      <div className="-mr-2 flex lg:hidden absolute top-6 right-6">
        <button
          type="button"
          onClick={handleMenuOpen}
          className="inline-flex items-center justify-center p-3 rounded-md text-WHITE hover:bg-blue-900  hover:text-opacity-80 font-bold font-sans transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-WHITE"
        >
          {open ? <RiCloseFill size="36px" /> : <FiMenu size="36px" />}
        </button>
      </div>
      <nav
        className={` gap-6 items-center  mt-[-20px] mb-10 flex-col transition-all duration-500 lg:flex-row delay-75 xl:flex-row wrap hidden lg:flex`}
      >
        {navLinks.map((link) => {
          return (
            <a
              key={link.id}
              href={`/${link.name}`}
              className="text-WHITE p-3 hover:bg-blue-900 rounded-md hover:text-opacity-80 font-bold font-sans transition-all duration-500	"
            >
              {link.text}
            </a>
          );
        })}
      </nav>
      {open ? (
        <div className="lg:hidden nox-2 pt-2 pb-3 space-y-1 sm:px-3 flex items-center flex-col transition-all duration-500">
          {navLinks2.map((href) => {
          return (
            <NavLink 
              key={href.id}
              href={`/${href.name}`}
              className="text-WHITE p-3 hover:bg-blue-900 rounded-md hover:text-opacity-80 font-bold font-sans transition-all duration-500	"
            >
              {href.text}
            </NavLink>
          );
        })}
          </div>
        
      ) : null}
    </header>
  );
}
