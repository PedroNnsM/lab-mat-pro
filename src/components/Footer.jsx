import { Logo } from "../assets/Logo";
import Picote from "../assets/img/picoteWithe.png";
export function Footer() {
  return (
    <footer className="w-full flex  items-center justify-center h-60 bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
      <div className=" flex flex-col lg:flex-row justify-between items-center w-[80%] ">
        <Logo width={"w-[40%] lg:w-[350px]"} />

        <div className="flex flex-col items-end text-WHITE font-semibold">
          <a href="https://www.google.com/maps/place/Universidade+do+Estado+do+Amazonas/@-8.7764315,-67.335075,17z/data=!4m10!1m2!2m1!1suea+est+labmate+pro+maps!3m6!1s0x922a0baad4d593ff:0x98c2b5023f06a052!8m2!3d-8.7764315!4d-67.3325001!15sChh1ZWEgZXN0IGxhYm1hdGUgcHJvIG1hcHOSARFwdWJsaWNfdW5pdmVyc2l0eeABAA!16s%2Fm%2F03qnlpp?entry=ttu">Endereço: 69850-000, Av. Bl. Vinte e três, 4-40 - Platô do Piquiá, Boca do Acre - AM, 69850-000, Brasil</a>
          <p>Telefone: (92) 98265-3945</p>
          <p>E-mail:<a href="mailto:jmacedo@uea.edu.br"> jmacedo@uea.edu.br</a></p>
        </div>
        <div
          className="   flex items-center 
        lg:mt-32 lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 "
        >
          <p className="text-WHITE ">Desenvolvido por:</p>
          <a
            className="w-28"
            href="https://www.linkedin.com/company/picote-produ%C3%A7%C3%B5es/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Picote} />
          </a>
        </div>
      </div>
    </footer>
  );
}
