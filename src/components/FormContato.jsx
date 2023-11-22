import { useState } from "react";
import ImagemSolda from "../assets/img/microscopio.png";

import { User, Envelope, DeviceMobileCamera } from "@phosphor-icons/react";

export default function FormContato() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (
      name === "" ||
      lastName === "" ||
      email === "" ||
      contact === "" ||
      message === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }
    alert("Ainda estou montando o envio de email, acalama o coraçao <3");
  }
  return (
    <div className="w-full max-w-6xl  mx-4 my-6 border-spacing-1 ">
      <div className="flex gap-3  shadow-2.5xl rounded-lg">
        <img className=" w-[40%]" src={ImagemSolda} alt="" />
        <div className="p-3 flex flex-col items-center justify-evenly flex-1 mx-10">
          <h3 className="text-blue-700 font-bold text-4xl ">
            Entre em contato
          </h3>
          <form action="" className="w-full flex flex-col gap-4 " onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-4 border pointer ring-inset border-[#6198cf3f] rounded-lg py-3 px-4 w-full shadow-md active:shadow-inner active:shadow-blue-500  ">
                <User size={18} className="text-blue-900 font-semibold" />
                <input
                  className="outline-0 pointer placeholder:text-blue-900 font-semibold "
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome "
                />
              </div>
              <div className="flex items-center gap-4 border pointer ring-inset border-[#6198cf3f] rounded-lg py-3 px-4 w-full shadow-md text-blue-900 active:shadow-inner active:shadow-blue-500  ">
                <User size={18} />
                <input
                  className="outline-0 pointer placeholder:text-blue-900 font-semibold "
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Sobrenome"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 border pointer ring-inset border-[#6198cf3f] rounded-lg py-3 px-4 w-full shadow-md active:shadow-inner active:shadow-blue-500  ">
              <Envelope size={18} />
              <input
                className="outline-0 pointer placeholder:text-blue-900 font-semibold "
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>{" "}
            <div className="flex items-center gap-4 border pointer ring-inset border-[#6198cf3f] rounded-lg py-3 px-4 w-full shadow-md active:shadow-inner active:shadow-blue-500  ">
              <DeviceMobileCamera size={18} />
              <input
                className="outline-0 pointer placeholder:text-blue-900 font-semibold "
                type="tel"
                pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
                onChange={(e) => setContact(e.target.value)}
                placeholder="Telefone"
              />
            </div>{" "}
            <textarea
              className="flex items-center gap-4 border pointer ring-inset border-[#6198cf3f] rounded-lg py-3 px-4 w-full shadow-md active:shadow-inner active:shadow-blue-500  outline-0 pointer placeholder:text-blue-900 font-semibold "
              placeholder="Escreva uma mensagem"
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="bg-gradient-to-br relative from-blue-500 from-10%  via-blue-800 to-blue-900 to-100% w-full text-WHITE font-semibold text-2xl py-4 rounded-lg hover:brightness-90 ">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
