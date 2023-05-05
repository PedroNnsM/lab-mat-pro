import { Header } from "../components/Header";
import CardServices from "../components/CardServices";

import { FaMicroscope } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { Vetores } from "../assets/vetores";

const CardItens = [
  {
    id: "1",
    title: "Análise de Materiais",
    description:
      "Descubra suas propriedades, características e possibilidades com nossas análises especializadas",
    img: <FaMicroscope size={30} />,
    color: "bg-blue-500",
  },
  {
    id: "2",
    title: "Cursos e treinamentos",
    description:
      "Habilidades e conhecimentos para melhorar a produtividade, qualidade e competitividade na indústria.",
    img: <TbCertificate size={40} />,
    color: "bg-blue-600",
  },
  {
    id: "3",
    title: "Projetos de Pesquisa",
    description:
      "Soluções avançadas para atender às necessidades específicas da sua indústria.",
    img: <BiSearchAlt size={40} />,
    color: "bg-blue-500",
  },
];

const itensBanner = [
  {
    id: "1",
    title: "Serviços",
    description:
      "Os processos metalúrgicos produzem e transformam os metais em produtos para o nosso uso.",
    img: <FaMicroscope size={30} />,
    color: "bg-blue-500",
  },
];

export default function Home() {
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40  ">
      <div className="flex flex-col items-center bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="absolute top-[-30px] right-[-20px] ">
          <Vetores />
        </div>

        <div className="w-xl">
          <Header />
          <section className="text-WHITE text-center max-w-6xl  mx-4">
            <div className="mx-5">
              <h2 className=" text-4xl font-bold mb-5 mx-4 ">
                Inovação através da pesquisa e tecnologia
              </h2>
              <p className=" text-xl font-semibold mx-4">
                Laboratório especializado em análise de materiais e capacitação
                para indústrias.
              </p>
            </div>
            <div
              className="flex gap-10 mt-36 max-w-6xl mx-4 mb-[-80px]
             flex-col justify-center items-center  
             md:flex-row md:justify-start md:items-stretch 
             lg:flex-row lg:justify-start lg:items-stretch 
             xl:flex-row xl:justify-start xl:items-stretch "
            >
              {CardItens.map((card) => {
                return (
                  <CardServices
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    img={card.img}
                    color={card.color}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
      <section className="h-full max-w-4xl  text-center mx-auto bg-WHITE mt-[150px] relative">
        <div className="max-w-xl flex flex-col mx-auto ">
          <h2 className="mx-10 font-bold  text-2xl text-blue-900">
            Especialização e treinamento em Engenharia de Materiais e
            Metalurgica
          </h2>
          <div></div>
        </div>
      </section>
    </div>
  );
}
