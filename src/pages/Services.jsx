import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import equipamento1 from "../../img/equipamento1.png";
import equipamento2 from "../../img/equipamento2.png";
import equipamento3 from "../../img/equipamento3.png";
import equipamento4 from "../../img/equipamento4.png";
import equipamento5 from "../../img/equipamento5.png";
import equipamento6 from "../../img/equipamento6.png";

import { Equipaments } from "../components/Equipaments";
import { TitlePages } from "../components/TitlePages";

export default function Services() {
  const servicos = [
    {
      id: "1",
      title: "Ensaios mecânicos:",
      description:
        "A medição da força necessária para deformar um corpo de prova fornece informações sobre propriedades do material, como Resistência à Compressão, Módulo de Elasticidade, Tensão de Escoamento e Deformação sob Compressão. Esse tipo de ensaio é amplamente utilizado na indústria de construção civil em materiais como concreto armado, madeira e ferro fundido. Para avaliar se esse tipo de ensaio é ou não ideal para a finalidade desejada, é necessário compreender o funcionamento e a função desse tipo de ensaio.",

      img: `${equipamento1}`,
      equipament: "Máquina universal de ensaios mecânicos Instron 5984",
    },
    {
      id: "2",
      title: "Ensaio dinâmico mecânico (DMA)",
      description:
        "O DMA é uma importante técnica usada para medir as propriedades mecânicas e viscoelásticas de materiais, como termoplásticos, termorrígidos, elastômeros, cerâmica e metais.A tecnologia DMA é a solução perfeita quando a precisão máxima é exigida e o material deve ser caracterizado em uma ampla faixa de rigidez e/ou de frequência. Além disso, a tecnologia DMA é extremamente versátil e, portanto, o DMA pode caracterizar materiais, mesmo em líquidos ou em níveis de umidade relativa específica.",
      img: `${equipamento2}`,
      equipament:
        "Equipamento de teste de propriedade dinâmico mecânicas DMA 242 NETZSCH",
    },
    {
      id: "3",
      title: "Dureza e Microdureza Víckers",
      description:
        "A realização do ensaio de dureza e microdureza é indispensável para determinar a dureza de materiais, com as mais diversas formas e tamanhos, e com as superfícies termicamente tratadas, para determinação da profundidade da camada efetiva endurecida por têmpera superficial, camadas cementradas e nitretadas.  O ensaio de dureza e microdureza também é recomendado para análise de materiais de grande porte, além de peças forjadas e peças fundidas.",

      img: `${equipamento3}`,
      equipament: "Equipamento de Nano Identação FISCHERSCOPE HM 2000",
    },
    {
      id: "4",
      title: "Ensaios metalográficos",
      description:
        "Através da realização desse ensaio, pode-se determinar a especificação de um material, assim como possíveis causas de desgastes prematuros, fraturas ou outras falhas. Dentro disso, ela assume um papel muito importante na compreensão do comportamento dos metais.",

      img: `${equipamento4}`,
      equipament: "",
    },
    {
      id: "5",
      title: "Análises químicas",
      description:
        "Determinar percentual de cada componente químico presente na amostra através de espectroscopia, análise química de Metais",

      img: `${equipamento5}`,
      equipament:
        "Equipamento de teste de propriedade dinâmico mecânicas DMA 242 NETZSCH",
    },
    {
      id: "6",
      title: "Ensaios Climáticos",
      description: "Temperatura, humidade, corrosão por nevoeiro salino",

      img: `${equipamento6}`,
      equipament: "",
    },
  ];

  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center ">
      <div className="flex flex-col items-center bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="w-xl">
          <Header />
        </div>
      </div>
      <section className="flex flex-col items-start max-w-4xl">
        <TitlePages title="Serviços" />
        {servicos.map((service) => {
          return (
            <Equipaments
              key={service.id}
              title={service.title}
              description={service.description}
              img={service.img}
              equipament={service.equipament}
            />
          );
        })}
      </section>
      <Footer />
    </div>
  );
}
