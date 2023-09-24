import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TitlePages } from "../components/TitlePages";

export default function Trainings() {
  const TrainingsItens = [
    {
      id: "1",
      title: "Análise de tolerâncias e ajustes",
    },
    {
      id: "2",
      title: "Análise química de metais ferroso e não-ferrosos",
    },
    {
      id: "3",
      title: "Análise química em ligas de alumínio",
    },
    {
      id: "4",
      title: "Controle estatístico do processo",
    },
    {
      id: "5",
      title: "Curso aditivação e degradação de polímeros",
    },
    {
      id: "6",
      title: "Curso corrosão, fundamentos, monitoração e controle",
    },
    {
      id: "7",
      title: "Curso de falhas em peças injetadas ",
    },
    {
      id: "8",
      title: "Curso introdução de desenho técnico",
    },
    {
      id: "9",
      title: "Curso introdução a análise de falhas em metais",
    },
    {
      id: "10",
      title: "Curso introdução aos processos de fundição",
    },
    {
      id: "11",
      title: "Ensaios mecânicos de materiais",
    },
    {
      id: "12",
      title: "Gerenciamento de riscos",
    },
    {
      id: "13",
      title: "Gestão de qualidade",
    },
    {
      id: "14",
      title: "Indústria 4.0: Materiais em impressão 3D",
    },
    {
      id: "15",
      title: "Introdução a análise de falhas em polímeros",
    },
    {
      id: "16",
      title: "Introdução às ligas de alumínio",
    },
    {
      id: "17",
      title: "Matemática básica para chão de fábrica",
    },
    {
      id: "18",
      title: "Metalografia básica",
    },
    {
      id: "19",
      title: "Metalografia de ligas de cobre",
    },
    {
      id: "20",
      title: "Metalografia do alumínio",
    },

    {
      id: "21",
      title: "Metodolodia de análise e solução de problemas (MASP)",
    },
    {
      id: "22",
      title: "Metrologia avançada",
    },
    {
      id: "23",
      title: "Metrologia básica",
    },

    {
      id: "24",
      title: "Modelagem e impressão 3D",
    },

    {
      id: "25",
      title: "Programa 8S’s na prática",
    },
    {
      id: "26",
      title: "Química fundamental",
    },
    {
      id: "27",
      title: "Soldagem de componentes eletrônicos",
    },
    {
      id: "28",
      title: "Tecnologia da usinagem",
    },
    {
      id: "29",
      title: "Tratamento térmicos em ligas de alumínio",
    },
    {
      id: "30",
      title: "Tratamento térmicos e termoquímicos de ligas metálicas",
    },
  ];
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center ">
      <div className="flex flex-col items-center bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="w-xl">
          <Header />
        </div>
      </div>
      <main className="flex items-center w-xl flex-col">
        <div>
          <TitlePages title="Treinamentos" />

          <div>
            {TrainingsItens.map((item) => {
              return <p key={item.id}> {item.title} </p>;
            })}
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
