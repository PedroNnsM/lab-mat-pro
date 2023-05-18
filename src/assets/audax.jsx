import AudaxImg from '../../img/audax.png'

// eslint-disable-next-line react/prop-types
export function Audax({ width, height }) {
  return (
    <>
      <img className={`${width} ${height}`} src={AudaxImg} alt="" />
    </>
  );
}
