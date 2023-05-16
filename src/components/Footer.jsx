import { Logo } from "../assets/Logo";

export function Footer() {
  return (
    <footer className="w-full flex  items-center justify-center h-60 bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
      <div className=" flex flex-col lg:flex-row justify-between items-center w-[80%]">
        <Logo width={'w-[40%] lg:w-[350px]'} />
        <div className="flex flex-col items-end text-WHITE font-semibold">
          <p>Endereço: Rua Exemplo, 123 - Bairro - Cidade - Estado - CEP</p>
          <p>Telefone: (00) 0000-0000</p>
          <p>E-mail: exemplo@empresa.com.br</p>
        </div>
      </div>
    </footer>
  );
}
