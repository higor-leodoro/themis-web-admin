"use client";

import Image from "next/image";
import MainButton from "@/components/MainButton";
import { Checkbox } from "@mui/material";

import useViewModel from "./useViewModel";

export default function SingIn() {
  const { isChecked, handleRememberUser, handleLogin, handleForgotPassword } =
    useViewModel();

  return (
    <div className="login-background-image h-screen overflow-hidden">
      <div className="w-full flex items-center justify-center md:block pt-12 md:pl-12">
        <Image src="/logo.svg" width={256} height={0} alt="logo" />
      </div>
      <div className="flex flex-col justify-center items-center h-4/5 px-4 mt-5 md:mt-0">
        <div className="w-full md:w-[539px] md:h-[488px] bg-white rounded-lg border shadow-lg p-10">
          <div className="text-center md:text-left">
            <p className="font-semibold text-4xl text-themis-slate">Login</p>
          </div>
          <div className="flex flex-col mt-10 gap-8">
            <input
              className="border rounded-lg py-4 pl-4 font-bold"
              type="text"
              placeholder="Nome de usuário"
            />
            <input
              className="border rounded-lg py-4 pl-4 font-bold"
              type="text"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="mt-10">
            <MainButton
              text="Iniciar sessão"
              onClick={handleLogin}
              // loading={true}
            />
          </div>
          <div className="mt-10">
            <button className="flex items-center" onClick={handleRememberUser}>
              <Checkbox
                checked={isChecked}
                onChange={handleRememberUser}
                sx={{
                  "&.Mui-checked": {
                    color: "#F97615",
                  },
                }}
              />
              <p>Lembrar usúario</p>
            </button>
          </div>
        </div>
        <div className="my-2">
          <button onClick={handleForgotPassword}>
            <p>Esqueceu sua senha?</p>
          </button>
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
