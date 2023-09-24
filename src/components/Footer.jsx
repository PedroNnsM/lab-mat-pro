import { Logo } from "../assets/Logo";
import Picote from "../assets/img/picoteWithe.png";
export function Footer() {
  return (
    <footer className="w-full flex  items-center justify-center h-60 bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
      <div className=" flex flex-col lg:flex-row justify-between items-center w-[80%]">
        <Logo width={"w-[40%] lg:w-[350px]"} />
        <div className="bg-grey-400 mt-32">
          <p>Desenvolvido por :</p>
          <a
            href="https://www.linkedin.com/company/picote-produ%C3%A7%C3%B5es/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Picote} />
          </a>
        </div>
        <div className="flex flex-col items-end text-WHITE font-semibold">
          <p>Endereço: Rua Exemplo, 123 - Bairro - Cidade - Estado - CEP</p>
          <p>Telefone: (00) 0000-0000</p>
          <p>E-mail: exemplo@empresa.com.br</p>
        </div>
      </div>
    </footer>
  );
}
