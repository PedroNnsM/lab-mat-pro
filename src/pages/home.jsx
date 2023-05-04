import { Header } from "../components/Header";
import LogoLAb from "../assets/VectorLAb.svg";
import LogoCertificate from "../assets/Frame.svg";
import LogoLupa from "../assets/FrameLupa.svg";
import CardServices from "../components/CardServices";

const ItensServices = [
  {
    id: "1",
    title: "Análise de Materiais",
    description:
      "Descubra suas propriedades, características e possibilidades com nossas análises especializadas",
    img: LogoLAb,
    color: "",
  },
  {
    id: "2",
    title: "Cursos e treinamentos",
    description:
      "Habilidades e conhecimentos para melhorar a produtividade, qualidade e competitividade na indústria.",
    img: LogoCertificate,
    color: "",
  },
  {
    id: "3",
    title: "Projetos de Pesquisa",
    description:
      "Soluções avançadas para atender às necessidades específicas da sua indústria.",
    img: LogoLupa,
    color: "",
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
            <div>
              {ItensServices.map((card) => {
                return (
                  <CardServices
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    img={card.img}
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
