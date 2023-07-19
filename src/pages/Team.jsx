import { Header } from "../components/Header";
import { TitlePages } from "../components/TitlePages";
import imagemCosta from "../../public/imagem-costa.png";
export default function Team() {
  const team = [
    {
      id: "1",
      name: "Dr. José Costa de Macedo Neto",
      imagem: `${imagemCosta}`,
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
      <section className="flex items-center w-xl">
        <TitlePages title="Equipe" />
        {team.map((person) => {
          return (
            <div key={person.id}>
              <img src={person.imagem} alt={` imagem ${person.name}`} />
              <div>
                <h2>{person.name}</h2>
                <a href="http://" target="_blank" rel="noopener noreferrer"></a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
