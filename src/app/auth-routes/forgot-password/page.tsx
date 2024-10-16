"use client";

import Image from "next/image";
import MainButton from "@/components/MainButton";

import useViewModel from "./useViewModel";

export default function SingIn() {
  const { handleSignin } = useViewModel();

  return (
    <div className="h-screen overflow-hidden">
      <div className="w-full flex items-center justify-center md:block pt-12 md:pl-12">
        <button onClick={handleSignin}>
          <Image src="/logo.svg" width={256} height={0} alt="logo" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center 2xl:xl:pt-[8%] h-4/5 px-4 mt-5 md:mt-0">
        <div className="w-full md:w-[539px] md:h-[488px] bg-white rounded-lg border shadow-lg p-10">
          <div className="">
            <p className="font-semibold text-center text-4xl text-themis-slate">
              Esqueci minha senha
            </p>
          </div>
          <div className="flex flex-col mt-10 gap-8">
            <p className="text-center text-black/50">
              Para recuperar sua senha, insira seu e-mail e enviaremos um link
              para recuperação de senha.
            </p>
            <input
              className="border rounded-lg py-4 pl-4 font-bold"
              type="text"
              placeholder="Insira seu email"
            />
          </div>
          <div className="mt-10">
            <MainButton
              text="Recuperar senha"
              isDark
              // loading={true}
            />
          </div>
        </div>
        <div className="w-full md:h-screen flex flex-col items-center gap-4 mt-5 md:gap-0 md:mt-0 md:flex-row md:items-end px-12">
          <p className="md:w-1/3 font-bold text-slate-300">
            DuckTech Softhouse © 2024
          </p>
          <button
            className="md:w-1/3"
            onClick={() =>
              window.open("https://sistemathemis.com/privacy", "_blank")
            }
          >
            <p className="font-bold text-slate-300">
              Termos de Serviço | Política de Privacidade
            </p>
          </button>
          <div className="w-1/3 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
}
