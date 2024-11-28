import { useState } from "react";

import Image from "next/image";

import Switch from "react-switch";

export default function RegistrationsList() {
  const [switchStates, setSwitchStates] = useState(Array(100).fill(false));

  const users = [
    {
      id: "2457",
      name: "Breno Ribeiro",
      group: "Técnico",
      unit: "Unidade 4564",
      signature: "Registrado",
    },
  ];

  const tableHeader = [
    "id do usuário",
    "nome do usuário",
    "login do usuário",
    "grupo do usuário",
    "unidade do usuário",
    "assinatura",
    "status",
  ];

  const toggleSwitch = (index: number) => {
    setSwitchStates((prevState) => {
      const newStates = [...prevState];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="font-medium text-2xl">Usuários cadastrados</p>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 flex justify-center items-center bg-themis-orange rounded-md">
            <Image
              src="/icons/edit-icon-white.svg"
              width={24}
              height={24}
              alt="Editar"
            />
          </button>
          <button className="w-10 h-10 flex justify-center items-center bg-themis-light-gray rounded-md">
            <Image
              src="/icons/share-icon.svg"
              width={24}
              height={24}
              alt="Compartilhar"
            />
          </button>
          <button className="w-10 h-10 flex justify-center items-center bg-themis-dark rounded-md">
            <Image
              src="/icons/funel-icon.svg"
              width={24}
              height={24}
              alt="Filtrar"
            />
          </button>
        </div>
      </div>

      <div className="flex-1 border rounded overflow-hidden">
        <div className="grid grid-cols-7 bg-themis-light-gray p-2">
          {tableHeader.map((title, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <div>
                <p className="uppercase text-center text-sm font-semibold">
                  {title}
                </p>
              </div>
              <div>
                <Image
                  src="/icons/arrow-down-icon.svg"
                  width={14}
                  height={14}
                  alt="Filtrar"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-y-auto h-full pb-8">
          {Array.from({ length: 100 }, (_, index) => {
            const user = users[0];
            return (
              <div
                key={index}
                className="grid grid-cols-7 text-center place-items-center text-sm "
              >
                <div className="py-3">
                  <p>{`${user.id}-${index + 1}`}</p>
                </div>
                <div className="py-3">
                  <p>{`${user.name} ${index + 1}`}</p>
                </div>
                <div className="py-3">
                  <p>login{index + 1}</p>
                </div>
                <div className="py-3">
                  <p>{user.group}</p>
                </div>
                <div className="py-3">
                  <p>{user.unit}</p>
                </div>
                <div className="py-3">
                  <p>{user.signature}</p>
                </div>
                <div className="flex items-center">
                  <Switch
                    checked={switchStates[index]}
                    onChange={() => toggleSwitch(index)}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={35}
                    handleDiameter={18}
                  />
                  <button className="relative left-12">
                    <Image
                      src="/icons/tree-dots-icon.svg"
                      width={6}
                      height={6}
                      alt="Filtrar"
                    />
                  </button>
                </div>
                <hr className="w-full col-span-7" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
