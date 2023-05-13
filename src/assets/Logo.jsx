import LogoImg from "../assets/Logo.svg";
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line react/prop-types
export function Logo({ width, height }) {
  return (
    <>
     <img className={`${width} ${height}`} src={LogoImg} alt="" />
    </>
  );
}
