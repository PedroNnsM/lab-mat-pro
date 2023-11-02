import { Header } from "../components/Header";

import { FaMicroscope } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import CardHeader from "../components/CardHeader";
import { CardBanner } from "../components/CardBanner";
import { Footer } from "../components/Footer";
import { CardHorizontal } from "../components/CardHorizontal";

import { Vetores } from "../assets/vetores";
import ImagemSolda from "../assets/img/microscopio.png";
import { Caloi } from "../assets/Caloi";
import { Audax } from "../assets/audax";
import { Eletronorte } from "../assets/Eletronorte";
import { EUALogo } from "../assets/EUALogo";
import { Carrousel } from "../components/Carrousel";

const CardItensHeader = [
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
    title: "Análise de materiais",
    description:
      "Os processos metalúrgicos produzem e transformam os metais em produtos para o nosso uso.",
  },
  {
    id: "2",
    title: "Desenvolvimento de processos metalúrgicos",
    description:
      "Os processos metalúrgicos produzem e transformam os metais em produtos para o nosso uso.",
  },
  {
    id: "3",
    title: "Desenvolvimento de processos metalúrgicos",
    description:
      "Os processos metalúrgicos produzem e transformam os metais em produtos para o nosso uso.",
  },
];

const itensHorizontalServicos = [
  {
    id: "1",
    title: "Engenharia Reversa",
    description:
      "A engenharia reversa é o processo de descobrir os princípios tecnológicos de um dispositivo ou equipamento.",
  },
  {
    id: "2",
    title: "Análise de elementos Finitos (MEF)",
    description:
      "Possibilita a determinação dos esforços em qualquer tipo de projeto e processo de fabricação.",
  },
  {
    id: "3",
    title: "Integridade Estrutural API 579 e BS 7910",
    description:
      "Nossos especialistas são altamente experientes no desenvolvimento e aplicações de técnicas FFS, particularmente para evitar fraturas frágeis e dúcteis.",
  },
  {
    id: "4",
    title: "Análise de falhas",
    description:
      "Nossos especialistas são altamente experientes no desenvolvimento e aplicações de técnicas FFS, particularmente para evitar fraturas frágeis e dúcteis.",
  },
];
const itensHorizontalCursos = [
  {
    id: "1",
    title: "Engenharia Reversa",
    description:
      "A engenharia reversa é o processo de descobrir os princípios tecnológicos de um dispositivo ou equipamento.",
  },
  {
    id: "2",
    title: "Análise de elementos Finitos (MEF)",
    description:
      "Possibilita a determinação dos esforços em qualquer tipo de projeto e processo de fabricação.",
  },
  {
    id: "3",
    title: "Integridade Estrutural API 579 e BS 7910",
    description:
      "Nossos especialistas são altamente experientes no desenvolvimento e aplicações de técnicas FFS, particularmente para evitar fraturas frágeis e dúcteis.",
  },
  {
    id: "4",
    title: "Análise de falhas",
    description:
      "Nossos especialistas são altamente experientes no desenvolvimento e aplicações de técnicas FFS, particularmente para evitar fraturas frágeis e dúcteis.",
  },
];

const parceiros = [
  {
    id: "1",
    imag: <Audax width="w-[150px]" height="h-[45px]" />,
  },
  {
    id: "2",
    empresa: "Caloi",
    imag: <Caloi width="150px" height="150px" />,
  },
  {
    id: "3",
    empresa: "Eletronorte",
    imag: <Eletronorte width="w-[150px]" height="h-[70px]" />,
  },
  {
    id: "4",
    empresa: "Eua",
    imag: <EUALogo width="w-[70px]" height="h-[100px]" />,
  },
];

export default function Home() {
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40  ">
      <div className="flex flex-col items-center bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="absolute top-[-30px] right-0 ">
          <Vetores />
        </div>

        <div className="">
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
              {CardItensHeader.map((card) => {
                return (
                  <CardHeader
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
      <section className="h-full max-w-6xl flex flex-col text-center mx-auto bg-WHITE mt-[150px] relative">
        <div className="max-w-xl flex flex-col mx-auto ">
          <h2 className="mx-4 font-bold  text-2xl text-blue-900">
            Soluções em desenvolvimento industrial na área de Engenharia de
            Materiais e Metalúrgica
          </h2>
        </div>{" "}
        <div
          className="flex mt-24 flex-col items-center justify-center mx-auto gap-4
        md:flex-row md:gap-8 md:justify-between md:mx-6

        "
        >
          <Carrousel />
        </div>
      </section>
      <main>
        <div className="flex flex-col items-center my-8">
          <h3 className="mx-auto font-bold text-grey-700 text-2xl  tracking-wider ">
            Nossos serviços
          </h3>
          <div className="mt-5 grid grid-cols-4 w-full">
            {itensHorizontalServicos.map((banner) => {
              return (
                <CardHorizontal
                  key={banner.id}
                  title={banner.title}
                  description={banner.description}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center my-8">
          <h3 className="mx-auto font-bold text-grey-700 text-2xl  tracking-wider ">
            Nossos Cursos
          </h3>
          <div className="mt-5 grid grid-cols-4 w-full">
            {itensHorizontalCursos.map((banner) => {
              return (
                <CardHorizontal
                  key={banner.id}
                  title={banner.title}
                  description={banner.description}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center my-8">
          <h3 className="mx-auto font-bold text-grey-700 text-2xl  tracking-wider ">
            Nossos Parceiros
          </h3>
          <div className="flex m-4 justify-center items-center  gap-8 max-w-4xl  mt-7 flex-wrap">
            {parceiros.map((parceiro) => {
              return <div key={parceiro.id}>{parceiro.imag}</div>;
            })}
          </div>
        </div>
        <div className="flex flex-col items-center my-8">
          <h3 className="mx-auto font-bold text-grey-700 text-2xl  tracking-wider ">
            Localização
          </h3>
        </div>
        <iframe
          className="w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0113157218975!2d-60.017234900000005!3d-3.0916466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1aa5ab5c0415%3A0xf94cde9065387a9a!2sEscola%20Superior%20De%20Tecnologia%20-%20EST%2FUEA!5e0!3m2!1spt-BR!2sca!4v1697716715466!5m2!1spt-BR!2sca"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="flex flex-col items-center my-8">
          <h3 className="mx-auto font-bold mb-6 text-grey-700 text-2xl  tracking-wider ">
            Contate-nos
          </h3>
          <div className="flex gap-3  shadow-2.5xl mx-4">
            <img className=" h-56" src={ImagemSolda} alt="" />
            <div className="p-3 flex flex-col items-center justify-between flex-1">
              <p className="text-blue-700 font-bold text-xl ">
                Ensaio de Materiais e Produtos
              </p>
              <button className="bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% w-full text-WHITE font-semibold p-1">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
