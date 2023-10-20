import ImagemSolda from "../assets/img/imageMicro.png";

export default function FormMatricula() {
  return (
    <div className="w-full max-w-4xl  mx-4 mb-5 ">
      <div className="flex gap-3  shadow-2.5xl rounded-lg">
        <img className=" w-[40%]" src={ImagemSolda} alt="" />
        <div className="p-3 flex flex-col items-center justify-between flex-1">
          <h3 className="text-blue-700 font-bold text-4xl ">
            Impulsione a sua carreira
          </h3>
          <p className="text-blue-700 text-base font-semibold">
            Inscreva-se agora mesmo nos nossos cursos e treinamentos para
            aprimorar suas habilidades técnicas e dê o primeiro passo rumo à
            excelência em sua área de atuação.
          </p>
          <button className="bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% w-full text-WHITE font-semibold p-1">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
