import { useState } from "react";

export default function useViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    {
      id: "2457",
      name: "Breno Ribeiro",
      login: "brenoribeiro",
      group: "Técnico",
      unit: "Unidade 4564",
      signature: "Registrado",
    },
    {
      id: "2458",
      name: "Breno Ribeiro",
      login: "brenoribeiro",
      group: "Técnico",
      unit: "Unidade 4564",
      signature: "Registrado",
    },
  ];

  const tableHeader = [
    { key: "id", label: "id do usuário" },
    { key: "name", label: "nome do usuário" },
    { key: "login", label: "login do usuário" },
    { key: "group", label: "grupo do usuário" },
    { key: "unit", label: "unidade do usuário" },
    { key: "signature", label: "assinatura" },
    { key: "status", label: "status" },
  ];

  return { users, tableHeader, isModalOpen, setIsModalOpen };
}
