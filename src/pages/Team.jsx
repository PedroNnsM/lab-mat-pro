import { Header } from "../components/Header";
import { TitlePages } from "../components/TitlePages";
import cvImagem from "../assets/img/logo-cv.png";

import ImagemCosta from "../assets/img/imagem-costa.png";
import ImagemAntonio from "../assets/img/imagem-antonio.png";
import ImagemMarcos from "../assets/img/imagem-marcos.png";
import ImagemRoger from "../assets/img/imagem-roger.png";
import ImagemJoelma from "../assets/img/imagem-joelma.png";
import ImagemGilberto from "../assets/img/imagem-gilberto.png";
import ImagemKiki from "../assets/img/imagem-kiki.png";
import ImagemAristides from "../assets/img/imagem-aristides.png";
import ImagemJuda from "../assets/img/imagem-juda.png";
import { Footer } from "../components/Footer";
import ButtonReturnToTop from "../components/ButtonReturnToTop";

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
    {
      id: "4",
      name: "Dr. Roger Hoel Bello ",
      imagem: `${ImagemRoger}`,
      description:
        "Professor da Escola Superior de Tecnologia da Universidade do Estado do Amazonas (EST/UEA). Tem experiência na área de Engenharia de Materiais, atuando principalmente na área de polímeros, bem como nanocompósitos poliméricos reforçados nanopartículas alotrópicas de carbono e com fibras amazônicas.   ",
      cv: "http://lattes.cnpq.br/0479686945106210",
    },
    {
      id: "5",
      name: "Dra. Joelma Monteiro de Carvalho ",
      imagem: `${ImagemJoelma}`,
      description:
        "Professora da Universidade do Estado do Amazonas (UEA) e da Secretaria de Educação – SEDUC. Tem experiência na área da Linguística, Sociolinguística, Etnolinguística, Letramento Digital e EAD. Tem formação multidisciplinar, atua nas seguintes áreas: Letramento, análise do discurso, semiótica das culturas, multilinguismo, Educação EJA, Turismo e Cultura Indígena do Amazonas e Cultura povo do Ártico Sámi. Tem experiência em Educação a distância: metodologia ativas, digitais e Ensino híbrido.",
      cv: "http://lattes.cnpq.br/5095453162912989",
    },
    {
      id: "6",
      name: "Dr. Gilberto García del Pino",
      imagem: `${ImagemGilberto}`,
      description:
        "Possui graduação em Engenharia Mecânica, Mestrado, Doutorado e Pós-doutorado em Engenharia pela Universidade de São Paulo. Atualmente é professor Associado da Universidade do Estado do Amazonas e coordenador do curso de pós-graduação Latos Sensu de “Processos e Tecnologias de Manufatura Mecânica”. Tem experiência na área de Engenharia Mecânica e Materiais, com ênfase em Processos de Fabricação atuando principalmente nas áreas de: Elementos Finitos, Biomecânica, Materiais para Ferramentas, materiais compósitos com fibras naturais, dispositivos para usinagem por CNC e Bio-materiais.",
      cv: "http://lattes.cnpq.br/5604141021425108",
    },
    {
      id: "7",
      name: "Dra. Kiki Pinheiro Melo",
      imagem: `${ImagemKiki}`,
      description:
        "Professora da Escola Superior de Tecnologia da Universidade do Estado do Amazonas (EST/UEA). Tem experiência na área de Engenharia Química, com ênfase em engenharia de processos, atuando principalmente nos seguintes temas: secagem, reaproveitamento de rejeitos da indústria, adsorção, análise e caracterização de partículas.",
      cv: "http://lattes.cnpq.br/1508677540399600",
    },
    {
      id: "8",
      name: "Dr. Arístides Rivera Torres",
      imagem: `${ImagemAristides}`,
      description:
        "Tem experiência na área de Engenharia Mecânica, com ênfase em Processos de Fabricação. Trabalha fundamentalmente o modelado de sólidos e o desenho assistido por computação, análises por elementos finitos, desenho gráfico, os sistemas CAD/CAM/CAE, e as tecnologias de fabricação de peças, ferramentas de corte e os processos tecnológicos de maquinado e medições 3D.",
      cv: "http://lattes.cnpq.br/2906419737827733",
    },
    {
      id: "9",
      name: "Dr. Judá Izel Silva ",
      imagem: `${ImagemJuda}`,
      description:
        "Servidor técnico da Escola Superior de Tecnologia da Universidade do Estado do Amazonas (EST/UEA), atuando como laboratorista responsável pelos LabP&D e LabMatPro.",
      cv: "http://lattes.cnpq.br/7475009864268075",
    },
  ];
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center ">
      <div className="flex flex-col items-center bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="w-xl">
          <Header />
        </div>
      </div>
      <main className="flex max-w-6xl flex-col mx-6">
        <TitlePages title="Equipe" />
        {team.map((person) => {
          return (
            <div
              key={person.id}
              className="flex items-center justify-between gap-4 border-b pb-6 border-grey-700 mt-4"
            >
              <div className="max-w-[237px] flex justify-center bg-bg-img-dr bg-no-repeat bg-bottom w-[225px] h-[240px] rounded-full">
                <img
                  className=" rounded-full"
                  src={person.imagem}
                  alt={` imagem ${person.name}`}
                />
              </div>
              <div className="flex flex-col max-w-[70%] ">
                <div className="flex items-center gap-2">
                  <h2 className="text-black text-lg font-semibold">
                    {person.name}
                  </h2>
                  <a href={person.cv} target="_blank" rel="noopener noreferrer">
                    <img src={cvImagem} className="hover:scale-125" />
                  </a>
                </div>
                <p className="text-justify text-black text-lg font-normal leading-5 ">
                  {person.description}
                </p>
              </div>
            </div>
          );
        })}
      </main>
      <ButtonReturnToTop />
      <Footer />
    </div>
  );
}
