import { Header } from "../components/Header";
import { TitlePages } from "../components/TitlePages";
import cvImagem from "../../img/logo-cv.png";

import ImagemCosta from "../../img/imagemCosta.png";
import ImagemAntonio from "../../img/imagem-antonio.png";
import ImagemMarcos from "../../img/imagem-marcos.png";


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
    {
      id: "2",
      name: "Dr. Antônio Claudio Kieling ",
      imagem: `${ImagemAntonio}`,
      description:
        "Coordenador do Laboratório Urutau Aerodesign de Estruturas Aeroespaciais da UEA e professor da Escola Superior de Tecnologia da Universidade do Estado do Amazonas (EST-UEA). Tem experiência nas áreas de Administração de Empresas e Engenharia de Materiais aplicada a Biotecnologia, atuando em temas como Materiais Compósitos, Empreendedorismo e Inovação e Gestão de Projetos Industriais. ",
      cv: "http://lattes.cnpq.br/2276542034087411",
    },
    {
      id: "3",
      name: "Dr. Marcos Dantas dos Santos ",
      imagem: `${ImagemMarcos}`,
      description:
        "Tem experiência na área de Engenharia Mecânica e Materiais, com ênfase em Processos de Fabricação atuando principalmente nos seguintes temas: seleção de materiais para processos de fabricação e projetos mecânicos, análise de falhas e danos em materiais, análise de desgaste atrito e lubrificação em tribosistemas.  ",
      cv: "http://lattes.cnpq.br/6521766717113975",
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
              <img className="bg-bg-img-dr bg-no-repeat bg-bottom w-[225px] h-[240px] rounded-full" src={person.imagem} alt={` imagem ${person.name}`} />{" "}
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
