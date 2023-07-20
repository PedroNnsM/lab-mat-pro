import { Header } from "../components/Header";
import { TitlePages } from "../components/TitlePages";
import ImagemCosta from "../../img/imagemCosta.png";
import cvImagem from "../../img/logo-cv.png";
export default function Team() {
  const team = [
    {
      id: "1",
      name: "Dr. José Costa de Macedo Neto",
      imagem: `${ImagemCosta}`,
      description:
        "Coordenador do LabPeD e professor da Escola Superior de Tecnologia da Universidade do Estado do Amazonas (EST/UEA). Tem experiência na área de Engenharia de Materiais e Metalúrgica, atuando em temas como Solidificação rápida, nanocompósitos poliméricos e polimerização em emulsão. ",
      cv: "http://lattes.cnpq.br/7868540287547126",
    },
  ];
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center ">
      <div className="flex flex-col items-center bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="w-xl">
          <Header />
        </div>
      </div>
      <section className="flex max-w-5xl flex-col">
        <TitlePages title="Equipe" />
        {team.map((person) => {
          return (
            <div
              key={person.id}
              className="flex items-center justify-between gap-4 border-b pb-6 border-grey-700"
            >
              <img src={person.imagem} alt={` imagem ${person.name}`} />{" "}
              <div className="flex flex-col ">
                <div className="flex items-center gap-2">
                  <h2 className="text-black text-lg font-semibold">{person.name}</h2>
                  <a href={person.cv} target="_blank" rel="noopener noreferrer">
                    <img src={cvImagem} />
                  </a>
                </div>
                <p className="text-justify text-black text-lg font-normal">{person.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
