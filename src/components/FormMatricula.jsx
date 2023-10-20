import ImagemSolda from "../assets/img/imageMicro.png";
import { User } from "@phosphor-icons/react";

export default function FormMatricula() {
  return (
    <div className="w-full max-w-6xl  mx-4 mb-5 ">
      <div className="flex gap-3  shadow-2.5xl rounded-lg">
        <img className=" w-[40%]" src={ImagemSolda} alt="" />
        <div className="p-3 flex flex-col items-center justify-between flex-1 mx-7">
          <h3 className="text-blue-700 font-bold text-4xl ">
            Impulsione a sua carreira
          </h3>
          <p className="text-blue-700 text-base font-semibold">
            Inscreva-se agora mesmo nos nossos cursos e treinamentos para
            aprimorar suas habilidades técnicas e dê o primeiro passo rumo à
            excelência em sua área de atuação.
          </p>
          <form action="" className="w-full ">
            <div className="flex gap-2 shadow-3xl rounded-lg py-1 px-2 w-full outline-none ">

              <User size={32} />
              <input className="outline-0" type="text" name="Name" id="name" placeholder="Nome completo" />
            </div>
             
           
          </form>
          <button className="bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% w-full text-WHITE font-semibold p-1">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
