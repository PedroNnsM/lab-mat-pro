import { useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TitlePages } from "../components/TitlePages";
import ImagemSolda from "../assets/img/microscopio.png";
import DegradacaoDoPlastico from "../assets/img/treinamentos/degradacaoDoPlastico.png";
import AnaliseDeFalhas from "../assets/img/treinamentos/analiseDeFalhas.png";
import PecasPlasticas from "../assets/img/treinamentos/pecasPlasticas.png";
import MatriaisPlasticos from "../assets/img/treinamentos/matriaisPlasticos.png";
import Fundicao from "../assets/img/treinamentos/fundicao.png";
import LigasDeAluminio from "../assets/img/treinamentos/ligasDeAluminio.png";
import MetalografiaBasica from "../assets/img/treinamentos/metalografiaBasica.png";

export default function Trainings() {
  const treinamentosTeste = [
    {
      id: "1",
      title: "Aditivação e Degradação de Plásticos",
      imagem: `${DegradacaoDoPlastico}`,
      objetivo: "Obter conhecimento sobre aditivação de polímeros.",
      carga: "16 horas",
      conteudo:
        "1. Principais polímeros disponíveis no Brasil: uma visão do mercado. 2. As matérias primas. Homopolímeros, copolímeros, termoplásticos e termofixos. Borrachas e elastômeros. Blendas e compósitos. Reações de polimerização. 3. Formulação: definição. Componentes de uma formulação: aditivos, cargas, agentes de reforço e modificadores. Formas de degradação de polímeros e estabilizantes. Tipos de reações de degradação, cisão de cadeias e reticulação, degradação sem cisão de cadeias, auto-oxidação e despolimerização. Formas independentes de iniciação das reações de degradação: térmica e fotoquímica. Formas associadas de iniciação das reações de degradação: mecânica e termo-mecânica, química, fotoquímica e termo química e Stress-cracking. 4. Estabilizantes e anti-oxidantes: Plastificantes. Lubrificantes e desmoldantes. Agentes anti-estáticos e agentes anti-fogging.Retardantes de chama. Pigmentos e corantes. Agentes de expansão e espumantes. Nucleantes. Modificadores de impacto. Anti-microbianos ou biocidas. 5. Tipos de cargas. Cargas de enchimento. Cargas funcionais. Cargas de reforço, fibras e negro de fumo. 6. Compósitos e nanocompósitos. 7. Preparação das formulações. Mistura intensiva. Extrusora mono e dupla rosca. Preparação de master-batch.",
    },
    {
      id: "2",
      title: "Falhas em Peças Plásticas Injetadas",
      imagem: `${PecasPlasticas}`,
      objetivo: "Obter informações introdutórias a falhas em peças injetadas.",
      carga: "20 horas",
      conteudo:
        "1 Teoria sobre o processo de Injeção. O processo de moldagem por injeção e seus controles. 2 Propriedade dos termoplásticos: princípios básicos sobre a ciência dos polímeros. Forças moleculares e ligações químicas nos polímeros; Peso molecular e sua distribuição; Estado físico amorfo e cristalino; Transições térmicas em polímeros; Propriedades físicas: sólido, fundido, orientação molecular. 3 Efeitos das condições de processamento. Temperatura do cilindro de aquecimento; Velocidade de resfriamento da peça; Pressão: pressão de injeção, tempo e pressão de recalque, contra-pressão, velocidade de pressão e rotação da rosca. 4 Orientação molecular. Efeito das condições de transformação sobre: orientação, contração, e das propriedades, efeito sobre a resistência a tração, ao impacto, a tração das peças. 5 Linhas de Solda. Variações produzidas pós-moldagem;Tensões internas nas peças moldadas; Variações dimensionais pós-moldagem; Efeito do tratamento térmico sobre as peças moldadas;",
    },
    {
      id: "3",
      title: "Introdução a Análise Materiais Plásticos",
      imagem: `${MatriaisPlasticos}`,
      objetivo:
        "Obter informações introdutórias sobre propriedades de polímeros (Materiais Plásticos).",
      carga: "20 horas",
      conteudo:
        "As técnicas a serem abordadas são de Espectroscopia no Infravermelho (FTIR). Calorimetria Exploratória Diferencial (DSC). Análise Termogravimétrica (TGA). Análise Dinâmico Mecânica (DMA Microscopia Eletrônica de Varredura (MEV).",
    },
    {
      id: "4",
      title: "Introdução a Análise de Falhas",
      imagem: `${AnaliseDeFalhas}`,
      objetivo:
        "Curso oferecido para profissionais que trabalham na área de controle de qualidade de produtos metalúrgicos.",
      carga: "20 horas",
      conteudo:
        "1. Falha de um Componente Estrutural; 1.1 Definição de falha em uma estrutura; 1.2 Razões para a falha de uma estrutura; 1.3 O processo de falha; 1.4 A Fratura; 1.5 Funções da análise de falhas; 1.6 Procedimento investigativo. 2.Tipos de Falhas em Serviço; 2.1 Introdução; 2.2 Fratura de Corpos-de-prova (CPs) Ensaiados em Tração; 2.3 Principais tipos de fratura monotônica; 2.3.1 Fratura Dúctil; 2.3.2 Fratura Semifrágil; 2.3.3 Fratura Frágil; 2.3.4 Fratura Intergranular; 2.4 Fratura por Fadiga; 2.4.1 Mecanismos de Iniciação de Trincas ? Características Microscópicas; 2.4.2 Macrofractografia de Falhas por Fadiga; 2.5 Fratura por Fluência. 3. A condução de uma análise de falha; 3.1 Ênfase e Objetivo de uma Análise de Falha. 4. Análises Metalográficas (prática); 4.1 Introdução; 4.2Metalografia dos materiais envolvidos; 4.3Metalografia da região da falha. 5. Ensaios Mecânicos (prática); 5.1 Ensaio de Tração; 5.2 Ensaio de Dureza/microdureza.",
    },
    {
      id: "5",
      title: "Introdução aos Processos de Fundição",
      imagem: `${Fundicao}`,
      objetivo:
        "Obter informações introdutórias sobre os processos de fundição.",
      carga: "20 horas",
      conteudo:
        "1 Introdução aos Processos de Fundição /Solidificação; 1.1 Conceitos Gerais sobre Ciência dos Materiais; 1.2 Princípios das Transformações de Fases; 1.3 Conceitos Fundamentais da Fusão, Vazamento e Solidificação. 2 Processos em Moldes Permanentes; 2.1 Principais processos de fundição em coquilhas; 2.1.1 Por gravidade; 2.1.2 Baixa pressão; 2.1.3 Alta pressão; 2.1.3.1 Defeitos associados ao processo de fundição sob pressão; 2.2 Processos de fundição por centrifugação; 2.3 Processos de fundição de precisão; 2.4 Tixofundição. 3 Prática de fundição; 3.1 Demonstração prática de fundição em molde metálico.",
    },
    {
      id: "6",
      title: "Introdução às Ligas de Alumínio",
      imagem: `${LigasDeAluminio}`,
      objetivo:
        "Obter informações introdutórias das características do alumínio e suas ligas.",
      carga: "20 horas",
      conteudo:
        "1. Introdução a estrutura cristalina dos materiais metálicos. 2 Propriedades do Alumínio Puro; 2.1 Ponto de fusão; 2.2 Fluidez; 2.3 Solidificação; 2.4 Oxidação. 3 Influência dos Elementos de Ligas no Alumínio; 3.1 Silício; 3.2 Cobre; 3.3 Magnésio; 3.4 Ferro; 3.5 Outroselementos. 4 Ligas de Alumínio; 4.1 Ligas de alumínio; 4.2 Ligas de alumínio silício; 4.3 Modos de solidificação das ligas de alumínio; 4.4 Tratamentos realizados no alumínio: desgaseificação eescorificação; 5. Introdução as microestruturas do alumínio; 5.1 Soluções sólidas; 5.2 Diagrama de fases alumínio-Silício (Al-Si); 5.2 Microestruturas.",
    },
    {
      id: "7",
      title: "Metalografia Básica",
      imagem: `${MetalografiaBasica}`,
      objetivo:
        "Apresentar técnicas e cuidados quanto a preparação de amostras para o ensaio metalográfico e identificação de fases. Apresentar informações práticas e fundamentais quanto à microestrutura de materiais.",
      carga: "15 horas, com 3 horas para aulas práticas",
      conteudo:
        "Introdução aos Ensaios Metalográficos: Objetivos; Macrografia; Micrografia; Objetivos das análises. Seleção da região de análise: Localização da amostra; Corte ; Montagem ou embutimento ; Identificação; Lixamento: manual; Polimentos: manual; Armazenamento; Ataques. Visual: Fotografias; Microscopia ótica",
    },
  ];
  const TrainingsItens = [
    {
      id: "1",
      title: "Análise de tolerâncias e ajustes",
      objetivo: "Obter conhecimento sobre aditivação de polímeros.",
      carga: "16 horas",
      conteudo:
        "1. Principais polímeros disponíveis no Brasil: uma visão do mercado. 2. As matérias primas. Homopolímeros, copolímeros, termoplásticos e termofixos. Borrachas e elastômeros. Blendas e compósitos. Reações de polimerização. 3. Formulação: definição. Componentes de uma formulação: aditivos, cargas, agentes de reforço e modificadores. Formas de degradação de polímeros e estabilizantes. Tipos de reações de degradação, cisão de cadeias e reticulação, degradação sem cisão de cadeias, auto-oxidação e despolimerização. Formas independentes de iniciação das reações de degradação: térmica e fotoquímica. Formas associadas de iniciação das reações de degradação: mecânica e termo-mecânica, química, fotoquímica e termo química e Stress-cracking. 4. Estabilizantes e anti-oxidantes: Plastificantes. Lubrificantes e desmoldantes. Agentes anti-estáticos e agentes anti-fogging.Retardantes de chama. Pigmentos e corantes. Agentes de expansão e espumantes. Nucleantes. Modificadores de impacto. Anti-microbianos ou biocidas. 5. Tipos de cargas. Cargas de enchimento. Cargas funcionais. Cargas de reforço, fibras e negro de fumo. 6. Compósitos e nanocompósitos. 7. Preparação das formulações. Mistura intensiva. Extrusora mono e dupla rosca. Preparação de master-batch.",
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
  const [elementosAbertos, setElementosAbertos] = useState({});

  function handleToggleElemento(id) {
    setElementosAbertos((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  }
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center ">
      <div className="flex flex-col items-center bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="w-xl">
          <Header />
        </div>
      </div>
      <main className="flex items-center w-xl flex-col max-w-4xl mx-6">
        <div>
          <TitlePages title="Treinamentos" />
          <p className="text-black-900  ">
            Esses cursos abrangentes são projetados para atender às necessidades
            variadas de profissionais que desejam aprimorar seus conhecimentos
            em engenharia de materiais e processos industriais.
            Independentemente do seu interesse ou objetivo, nossos cursos
            oferecem uma base sólida e prática para impulsionar seus
            conhecimentos profissionais na indústria.
          </p>
          <div className="flex flex-col items-center my-8 w-full">
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
          <TitlePages title="Conheça nossos cursos disponíveis" />
          <div className="mt-10">
            {treinamentosTeste.map((item) => {
              const isElementoAberto = elementosAbertos[item.id];
              return (
                <div className="mb-4" key={item.id}>
                  <div
                    className="bg-grey-300 p-6 flex gap-4 rounded-2xl shadow-2.5xl items-center mb-4 cursor-pointer"
                    onClick={() => handleToggleElemento(item.id)}
                  >
                    <img
                      className="w-[125px] h-[125px]"
                      src={item.imagem}
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl text-black-900 font-bold mb-2">
                        {item.title}
                      </h3>
                      <span className="text-lg text-black-900 font-bold ">
                        Obejtivo Geral:
                      </span>
                      <span className="text-sm  font-normal ">
                        {item.objetivo}
                      </span>
                      <span className="text-lg text-black-900 font-bold ">
                        Carga horária:
                      </span>
                      <span className="text-sm  font-normal ">
                        {item.carga}
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      isElementoAberto
                        ? "bg-gradient-to-br relative  from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% p-6 flex flex-col gap-4 rounded-2xl shadow-2.5xl items-start text-WHITE"
                        : "hidden"
                    }
                  >
                    <p className="font-semibold ">Conteúdo Programático:</p>
                    <span className="font-thin text-sm">{item.conteudo}</span>
                  </div>
                </div>
              );
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
