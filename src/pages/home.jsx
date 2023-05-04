import { Header } from "../components/Header";
import CardServices from "../components/CardServices";


import {FaMicroscope } from 'react-icons/fa'
import {TbCertificate } from 'react-icons/tb'
import {BiSearchAlt } from 'react-icons/bi'

const ItensServices = [
  {
    id: "1",
    title: "Análise de Materiais",
    description:
      "Descubra suas propriedades, características e possibilidades com nossas análises especializadas",
    img: <FaMicroscope size={30} />,
    color: "bg-blue-700",
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

export default function Home() {
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40  ">
      <div className="flex flex-col items-center bg-gradient-to-br from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="w-xl">
          <Header />
          <section className="text-WHITE text-center">
            <h2 className=" text-3xl">
              Inovação através da pesquisa e tecnologia
            </h2>
            <p className=" text-xl">
              Laboratório especializado em análise de materiais e capacitação
              para indústrias.
            </p>
            <div className="flex gap-5 mt-16">
              {ItensServices.map((card) => {
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
    </div>
  );
}
