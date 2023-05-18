import { Mapa } from "../assets/Mapa";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function About() {
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center  ">
      <div className="flex flex-col items-center bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <Header />
      </div>
      <main className="flex flex-col items-center w-xl mt-9">
        <div className="flex gap-7 max-w-4xl mx-6">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl text-blue-900">Quem somos</h1>
            <p className="mt-3 text-sm  text-blue-900 font-semibold max-w-4xl">
              Nosso laboratório foi fundado em XXX em Manaus pelo eng. XXXXXXX
              .s Inicialmente formada a partir de parceiria entre a Universidade
              do Estado do Amazonas (UEA) e o Institusto XXX, onde foram
              contemplados amplo espaço físico com equipamentos de ponta para
              suprir demandas de serviços junto ao Distrito Industrial
            </p>
          </div>
          <Mapa width={"350px"} />
        </div>
        <div>
          <h2 className="font-bold text-4xl text-blue-900">Objetivo</h2>
          <p className="mt-3 text-sm  text-blue-900 font-semibold max-w-4xl">
            Ser referencia em análises técnicas e treinamentos em engenharia de
            materiais, desenvolvendo pesquisas e serviços sob padrões de
            qualidade reconhecidos e oferecendo suporte e assistência técnica
            com competência, sempre dentro de padrões de ética e respeito ao
            meio ambiente.
          </p>
        </div>
        <div className="mt-9">
          <h2 className="font-bold text-4xl text-blue-900">Estrutura</h2>
          <p className="mt-3 text-sm  text-blue-900 font-semibold max-w-4xl">
            Nossas instalações estão localizadas na Escola Superior de
            Tecnolodia da UEA, e compreende dois laboratórios equipados com
            diversos equipamentos para ensaios mecânicos, metalográficos,
            climáticos e análises térmicas e químicas. Sendo os recursos
            humanos: professores, pesquisadores doutores, técnicos e
            colaboradores da universidade e de outras instituições de pesquisa e
            tecnologia.
          </p>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-4 mx-6 max-w-4xl mt-7">
          <img
            className="row-span-1 col-span-2 rounded-lg"
            src="https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <img
            className="row-span-2 col-span-2 rounded-lg"
            src="https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <img
            className="row-span-3 col-span-4 rounded-lg"
            src="https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <img
            className="row-span-4 col-span-4 rounded-lg"
            src="https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        <div className="my-9">
          <h2 className="font-bold text-4xl text-blue-900">Treinamentos</h2>
          <p className="mt-3 text-sm  text-blue-900 font-semibold max-w-4xl">
            Nossas instalações estão localizadas na Escola Superior de
            Tecnolodia da UEA, e compreende dois laboratórios equipados com
            diversos equipamentos para ensaios mecânicos, metalográficos,
            climáticos e análises térmicas e químicas. Sendo os recursos
            humanos: professores, pesquisadores doutores, técnicos e
            colaboradores da universidade e de outras instituições de pesquisa e
            tecnologia.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
