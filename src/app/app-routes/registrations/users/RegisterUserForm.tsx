import { useState } from "react";

import FormButtons from "@/components/FormButtons";

export default function RegisterUserForm() {
  return (
    <form className="flex flex-col gap-5 mt-10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Nome do usuário
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="Insira o nome do usuário"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            RG/CPF
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="number"
            placeholder="Insira o número do documento"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Email
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="email"
            placeholder="Insira o email do usuário"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Telefone
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="number"
            placeholder="Insira o telefone do usuário"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-themis-text-gray ml-1">
              CEP
            </label>
            <input
              className="w-[265px] border pl-5 py-3 text-themis-text-gray rounded appearance-none"
              type="number"
              placeholder="Insira o cep do usuário"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-themis-text-gray ml-1">
              Estado
            </label>
            <input
              className="w-[265px] border pl-5 py-3 text-themis-text-gray rounded"
              type="text"
              placeholder="Insira o estado do usuário"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Cidade
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="Insira o nome da cidade"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Logradouro
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="Rua das flores"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Complemento
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="AP 402"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Grupo do usuário
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="Selecione o grupo"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Unidade do usuário
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="Selecione a unidade"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Username
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="text"
            placeholder="joaopedro"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-themis-text-gray ml-1">
            Senha
          </label>
          <input
            className="2xl:w-[539px] border pl-5 py-3 text-themis-text-gray rounded"
            type="number"
            placeholder="J@aopedro1"
          />
        </div>
      </div>
      <p className="text-right text-[11px] relative bottom-4 right-20 text-themis-text-light-gray">
        A senha deve conter 8 a 20 caracteres, com letras, números e caracteres
        especiais.
      </p>
      <hr />
      <FormButtons />
    </form>
  );
}
