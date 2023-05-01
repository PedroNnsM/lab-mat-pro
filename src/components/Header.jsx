import Logo from "../assets/Logo.svg";

export function Header() {
  const navList = [
    {
      id: 1,
      name: "home",
      text: "Home",
    },
    {
      id: 2,
      name: "about",
      text: "Quem somos",
    },
    {
      id: 3,
      name: "team",
      text: "Equipe",
    },
    {
      id: 4,
      name: "services",
      text: "Serviços",
    },
    {
      id: 5,
      name: "trainings",
      text: "Treinamentos",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center ">
      <img className="w-[25rem]" src={Logo} alt="" />
      <nav>
        <ul className="flex gap-6 mt-[-20px]">
          {navList.map((item) => {
            return (
              <li key={item.idid}>
                <a href={`/${item.name}`} className="text-WHITE hover:text-opacity-60" >{item.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
