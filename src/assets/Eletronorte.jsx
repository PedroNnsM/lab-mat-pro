import EletronorteImg from '../assets/img/eletronorte.png'

// eslint-disable-next-line react/prop-types
export function Eletronorte({ width, height }) {
  return (
    <>
      <img className={`${width} ${height}`} src={EletronorteImg} alt="" />
    </>
  );
}
