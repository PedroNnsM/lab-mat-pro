import { Logo } from "../assets/Logo";

export function Footer() {
  return (
    <footer className=" flex items-center justify-center  h-60 bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% ">
      <div className="w-full flex justify-between">
        <Logo width={"350px"} />
        <div className="flex flex-col items-end ">
          <p>Endereço: Rua Exemplo, 123 - Bairro - Cidade - Estado - CEP</p>
          <p>Telefone: (00) 0000-0000</p>
          <p>E-mail: exemplo@empresa.com.br</p>
        </div>
      </div>
    </footer>
  );
}
