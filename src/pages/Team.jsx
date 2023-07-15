import { Header } from "../components/Header";
import { TitlePages } from "../components/TitlePages";

export default function Team() {
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center ">
      <div className="flex flex-col items-center bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
        <div className="w-xl">
          <Header />
          
        </div>
      </div>
      <section className="flex items-center w-xl">
        
        <TitlePages title='Equipe' />
      </section>
    </div>
  );
}


