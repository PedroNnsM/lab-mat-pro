import ImagemSolda from "../assets/img/imageMicro.png";
import { User, Envelope, DeviceMobileCamera } from "@phosphor-icons/react";

export default function FormMatricula() {
  return (
    <div className="w-full max-w-6xl  mx-4 mb-5 border-spacing-1 ">
      <div className="flex gap-3  shadow-2.5xl rounded-lg">
        <img className=" w-[40%]" src={ImagemSolda} alt="" />
        <div className="p-3 flex flex-col items-center justify-between flex-1 mx-10">
          <h3 className="text-blue-700 font-bold text-4xl ">
            Impulsione a sua carreira
          </h3>
          <p className="text-blue-700 text-base font-semibold">
            Inscreva-se agora mesmo nos nossos cursos e treinamentos para
            aprimorar suas habilidades técnicas e dê o primeiro passo rumo à
            excelência em sua área de atuação.
          </p>
          <form action="" className="w-full flex flex-col gap-4 ">
            <div className="flex items-center gap-4 border pointer ring-inset border-[#6198cf3f] rounded-lg py-3 px-4 w-full shadow-md active:shadow-inner active:shadow-blue-500  ">
              <User size={18} />
              <input
                className="outline-0 pointer "
                type="text"
                name="Name"
                id="name"
                placeholder="Nome completo"
              />
            </div>{" "}
            <div className="flex items-center gap-4 border pointer ring-inset border-[#6198cf3f] rounded-lg py-3 px-4 w-full shadow-md active:shadow-inner active:shadow-blue-500  ">
              <DeviceMobileCamera size={18} />
              <input
                className="outline-0 pointer "
                type="text"
                name="contato"
                id="contato"
                placeholder="Contato (WhatsApp)"
              />
            </div>{" "}
            <div className="flex items-center gap-4 border pointer ring-inset border-[#6198cf3f] rounded-lg py-3 px-4 w-full shadow-md active:shadow-inner active:shadow-blue-500  ">
              <Envelope size={18} />
              <input
                className="outline-0 pointer "
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>{" "}
            <button className="bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% w-full text-WHITE font-semibold text-2xl py-4 rounded-lg hover:brightness-90">
              Matricule-se agora!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
