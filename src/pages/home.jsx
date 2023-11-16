import CardHeader from "../components/CardHeader";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { SlGraduation } from "react-icons/sl";
import { FaMicroscope } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineArticle, MdQueryStats } from "react-icons/md";

import { Vetores } from "../assets/vetores";
import { Caloi } from "../assets/Caloi";
import { Audax } from "../assets/audax";
import { Eletronorte } from "../assets/Eletronorte";
import { EUALogo } from "../assets/EUALogo";
import { Carrousel } from "../components/Carrousel";
import FormContato from "../components/FormContato";

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
        <div className=" flex flex-col mx-4 gap-5 items-center">
          <h2 className=" font-bold  text-2xl text-blue-900 ">
            Soluções em desenvolvimento industrial na área de
            <br /> Engenharia de Materiais e Metalúrgica
          </h2>
          <Carrousel />
        </div>
      </section>
      <main>
        <div className="flex flex-col items-center my-8 mx-4">
          <h3 className="mx-auto font-bold text-grey-700 text-2xl  tracking-wider ">
            Nossos laboratórios em números
          </h3>
          <div className="mt-5 flex justify-between w-full max-w-xl ">
            <div className="flex items-center justify-center flex-col max-w-xl ">
              <MdOutlineArticle className="text-blue-900 text-5xl text-center" />
              <p className="text-3xl font-bold mt-2 text-blue-900">+250</p>
              <p className="font-medium text-blue-900 text-xl">Artigos</p>
              <p className="font-medium text-blue-900 text-xl">publicados</p>
            </div>
            <div className="flex items-center justify-center flex-col max-w-xl ">
              <SlGraduation className="text-blue-900 text-5xl text-center" />
              <p className="text-3xl font-bold mt-2 text-blue-900">+300</p>
              <p className="font-medium text-blue-900 text-xl">Alunos</p>
              <p className="font-medium text-blue-900 text-xl">Capacitados</p>
            </div>
            <div className="flex items-center justify-center flex-col max-w-xl ">
              <MdQueryStats className="text-blue-900 text-5xl text-center" />
              <p className="text-3xl font-bold mt-2 text-blue-900">+45</p>
              <p className="font-medium text-blue-900 text-xl">Projetos</p>
              <p className="font-medium text-blue-900 text-xl">realizados</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-8 mx-4">
          <div>
            <div className="mt-5 grid grid-cols-2 gap-4 mx-4 max-w-6xl w-full text-WHITE text-justify font-semibold group  transition duration-300 ease-out hover:ease-in">
              <div
                className="bg-bg-banner-apresentacao-1 flex justify-center rounded-lg items-center w-full h-full  transition duration-300 ease-out hover:ease-in group-hover:bg-gradient-to-br from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% px-6"
                style={{
                  transition: "all",
                }}
              >
                <img
                  className="w-[60%] group-hover:hidden transition duration-300 ease-out hover:ease-in"
                  src="https://i.ibb.co/dLFmF2q/Portf-lio-Engenharia-de-Materiais-2.png"
                  alt="Logo Lab Mat Pro"
                />
                <p className="hidden group-hover:block transition duration-300 ease-out hover:ease-in">
                  <strong> LabMatPro</strong> é um laboratório referência do
                  norte do Brasil, líder em análises metalográficas, equipado
                  com tecnologia de ponta que abrange todas as etapas do
                  processo, desde o corte preciso de amostras até a análise
                  microscópica detalhada. Nossa equipe altamente qualificada
                  oferece preparação de amostras de alto nível, identificando
                  falhas em soldas e oportunidades de melhoria em processamentos
                  metálicos. Comprometidos com a qualidade e a inovação, estamos
                  prontos para atender às necessidades complexas da indústria e
                  da pesquisa, fornecendo resultados confiáveis e soluções
                  excepcionais.
                </p>
              </div>
              <div className="relative rounded-lg after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-lg after:bg-blue-500 after:opacity-25 transition duration-300 ease-out hover:ease-in">
                <img
                  className=" group-hover:hidden transition duration-300 ease-out hover:ease-in"
                  src="https://i.ibb.co/kJq0bQm/DSCF0489-1.png"
                  alt="Uma pessoa atuando com a analise do material"
                />
                <img
                  className=" hidden group-hover:block pt-1 transition duration-300 ease-out hover:ease-in"
                  src="https://i.ibb.co/jyMhY4g/DSCF0464-1.png"
                  alt="Uma pessoa atuando com a analise do material"
                />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 mx-4 max-w-6xl w-full text-WHITE text-justify font-semibold group transition duration-300 ease-out hover:ease-in">
              <div
                className="bg-bg-banner-apresentacao-1 flex justify-center rounded-lg items-center w-full h-full  transition duration-300 ease-out hover:ease-in group-hover:bg-gradient-to-br from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% px-6"
                style={{
                  transition: "all",
                }}
              >
                <img
                  className="w-[60%] group-hover:hidden transition duration-300 ease-out hover:ease-in"
                  src="https://i.ibb.co/dbKcXnC/Group.png"
                  alt="Laboratorio de pesquisa e desenvolvimento"
                />
                <p className="hidden group-hover:block transition duration-300 ease-out hover:ease-in">
                  <strong>
                    {" "}
                    P&D Laboratório de Pesquisa e Desenvolvimento
                  </strong>{" "}
                  é o epicentro de inovação no Polo Industrial de Manaus. Aqui,
                  uma equipe especializada colabora com profissionais da
                  indústria para dar vida a projetos de desenvolvimento de
                  materiais e processos. Equipado com tecnologia de ponta,
                  oferecemos a capacidade de realizar ensaios mecânicos de
                  dureza e microdureza, ensaios dinâmicos mecânicos (DMA),
                  análises químicas e climáticas, além de fornecer acesso
                  exclusivo ao microscópio eletrônico de varredura (MEV), um dos
                  poucos disponíveis na região norte do país. Nossa missão é
                  impulsionar a inovação, auxiliando nossos clientes a alcançar
                  excelência em seus projetos de desenvolvimento.
                </p>
              </div>
              <div className="relative  after:absolute after:top-0 rounded-lg after:left-0 after:w-full after:h-full after:rounded-lg after:bg-blue-500 after:opacity-25 transition duration-300 ease-out hover:ease-in">
                <img
                  className="  group-hover:hidden transition duration-300 ease-out hover:ease-in"
                  src="https://i.ibb.co/1npgRMh/DSCF0618.png"
                  alt="Uma pessoa operando uma maquima"
                />
                <img
                  className=" hidden group-hover:block pt-1 transition duration-300 ease-out hover:ease-in"
                  src="https://i.ibb.co/p2TBrFb/DSCF0654.png"
                  alt="Uma pessoa atuando com a analise do material"
                />
              </div>
            </div>
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
          <FormContato />
        </div>
      </main>
      <Footer />
    </div>
  );
}
