import mapa from "../assets/img/manaus.png";
import ButtonReturnToTop from "../components/ButtonReturnToTop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TitlePages } from "../components/TitlePages";

export default function About() {
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center  ">
      <div className="flex flex-col items-center bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <Header />
      </div>
      <main className="flex flex-col items-center w-xl mt-9 gap-4">
        <div className="flex flex-col items-center gap-7 max-w-4xl mx-6">
          <div className="flex flex-col">
            <TitlePages title="Quem somos" />
            <p className="mt-3 text-sm  text-blue-900 font-semibold max-w-4xl">
              O Laboratório de Pesquisa e Desenvolvimento da Universidade do
              Estado do Amazonas – P&D LAB/UEA, foi instituído pela Resolução Nº
              27/2014 e está vinculado à Agência de Inovação – AGIN/UEA,
              localizado na área da Escola Superior de Tecnologia (EST), na
              cidade de Manaus, Amazonas. É formado por pesquisadores e
              professores doutores em diversas áreas da engenharia, possuindo
              assim amplo espectro de expertises para suprir as mais variadas
              demandas da indústria e Institutos de tecnologia do estado do
              Amazonas.
            </p>
          </div>
          <img src={mapa} width={"350px"} />
        </div>
        <div className="max-w-4xl mx-6">
          <h2 className="font-bold text-3xl text-blue-900">Objetivo</h2>
          <p className="mt-3 text-sm  text-blue-900 font-semibold max-w-4xl">
            Com objetivo geral de realizar treinamentos, pesquisas e prestação
            de serviços de consultoria e assessoria nas áreas científicas e
            tecnológicas, por meio da implementação de laboratórios tecnológicos
            na UEA, para complementação da formação de profissionais nas áreas
            da engenharia.
          </p>
          <div className="flex max-w-4xl gap-2 pt-4">
            <img
              className="w-1/2 h-auto"
              src="https://i.ibb.co/0JyRpQm/Rectangle-298.png"
              alt="Estudantes focados olhando suas anotações no notebook"
            />
            <img
              className="w-1/2 h-auto"
              src="https://i.ibb.co/chbkwm1/Rectangle-299.png"
              alt="dr. Costa na frente da instalação do laboratório"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-6">
          <h2 className="font-bold text-3xl text-blue-900">Estrutura</h2>
          <p className="mt-3 text-sm  text-blue-900 font-semibold max-w-4xl">
            P&D LAB/UEA dispõe de equipamentos em distintas áreas da engenharia,
            capaz de realizar inúmeras análises de matérias, tais como: análise
            de metalografia, análise de ensaios mecânicos, analise de polímeros,
            analises de biomateriais, analise de raios X 3D, analise de
            calorimetria (displays, monitores, LCD, LED), análise de metrologia,
            análise química, análise de corrosão, análise em vibrações, análise
            modal, análise de ensaios climáticos, envelhecimento de materiais,
            choque térmico, análise de superfícies, entre outros.
          </p>
        </div>
        <div className="max-w-4xl mx-6 py-6">
          <img
            className="w-full"
            src="https://i.ibb.co/qp1KBLg/Rectangle-297.png"
            alt="estrutura"
          />
        </div>
      </main>
      <ButtonReturnToTop />
      <Footer />
    </div>
  );
}
