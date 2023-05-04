
// eslint-disable-next-line react/prop-types
export default function CardServices({img, title, description,color}) {
  return (
    <div className=" flex flex-col border items-center relative bg-WHITE p-5 rounded-lg w-64 shadow-3xl ">
      <div className={`absolute top-[-40px] flex items-center justify-center polygon w-[69px] h-[80px] ${color}  `}>{img}</div>
      <div className="mt-8">
        <h3 className="text-blue-900 font-bold text-xl mb-4">{title}</h3>
        <p className="text-black-900 font-semibold">{description}</p>
      </div>Análise de Materiais
      Descubra suas propriedades, características e possibilidades com nossas análises especializadas
      
      Cursos e treinamentos
      Habilidades e conhecimentos para melhorar a produtividade, qualidade e competitividade na indústria.
      
      Projetos de Pesquisa
    </div>
  );
}
