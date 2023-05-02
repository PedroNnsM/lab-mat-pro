import { Header } from "../components/Header";

function Home() {
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
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
