"use client";

import Image from "next/image";
import GreenActionButton from "@/components/GreenActionButton";
import { Checkbox } from "@mui/material";

export default function Profile() {
  return (
    <div className="p-8 h-full overflow-auto">
      <div>
        <h1 className="font-medium text-themis-medium-gray text-xl">Geral</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-10 w-1/3">
          <button className="flex justify-center items-center gap-5 w-full">
            <div className="w-20 h-20 relative border-4 border-themis-light-gray rounded-full">
              <Image
                src="/icons/avatar-icon.svg"
                objectFit="cover"
                fill={true}
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <div className="flex items-center gap-3">
                <h1 className="font-medium text-themis-orange">
                  Alterar foto de perfil
                </h1>
                <div className="bg-themis-light-gray p-1 rounded">
                  <Image
                    src="/icons/edit-icon.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </div>
              </div>
              <div>
                <p className="font-light text-sm text-themis-text-gray">
                  Tamanho máximo 20 MB. Formato: JPG, PNG ou GIF.
                </p>
              </div>
            </div>
          </button>
          <div className="mt-8">
            <form className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <label className="w-32 text-right text-themis-orange">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value="DuckTech"
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="w-32 text-right text-themis-orange">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border p-2 rounded"
                  value="teste@teste.com"
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="w-32 text-right text-themis-orange">
                  Telefone
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value="(00) 00000-0000"
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="w-32 text-right text-themis-orange">
                  Cargo
                </label>
                <select className="w-full border p-2 rounded" value="DuckTech">
                  <option value="">Selecione</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <label className="w-32 text-right text-themis-orange">
                  Local
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value="Santos - SP"
                />
              </div>
              <div className="flex justify-end py-4">
                <GreenActionButton title="Salvar alterações" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="mt-10">
        <h1 className="font-medium text-themis-medium-gray text-xl">
          Alterar senha
        </h1>
        <div className="flex flex-col justify-center items-center">
          <form className="  w-1/3">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <label className="w-32 text-themis-orange">Senha atual</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value="DuckTech"
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="w-32 text-themis-orange">Nova senha</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value="DuckTech"
                />
              </div>
            </div>
            <div className="flex justify-end py-4">
              <GreenActionButton title="Salvar alterações" />
            </div>
          </form>
        </div>
      </div>
      <hr className="my-5" />
      <div className="mt-10">
        <h1 className="font-medium text-themis-medium-gray text-xl">
          Preferências
        </h1>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="w-1/3">
            <div className="flex items-center">
              <Checkbox />
              <p>Receber notificações de atualização do sistema</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
