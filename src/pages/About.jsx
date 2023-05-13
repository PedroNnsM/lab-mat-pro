import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function About() {
  return (
    <div className=" min-h-screen bg-slate-700 flex-col w-full  bg-opacity-40 flex items-center ">
        <div className=" bg-gradient-to-br w-full from-blue-500 from-10%  via-blue-800 to-blue-900 to-100%">
          <Header />
          
        </div>
      
      <section className="flex items-center w-xl">
        
        <h1>Quem somos</h1>
      </section>
      <Footer /> 
    </div>
  );
}


