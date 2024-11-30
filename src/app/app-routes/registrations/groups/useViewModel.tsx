import { useState } from "react";

export default function useViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const groups = [
    {
      id: "2457",
      name: "Técnico",
      permission: "leitor",
      user_quantity: "35/300",
    },
    {
      id: "2458",
      name: "Administração",
      permission: "Admin",
      user_quantity: "35/300",
    },
  ];

  const tableHeader = [
    { key: "id", label: "id do grupo" },
    { key: "name", label: "nome do grupo" },
    { key: "permission", label: "permissão" },
    { key: "user_quantity", label: "Quantidade de usuários" },
    { key: "status", label: "status" },
  ];

  return { groups, tableHeader, isModalOpen, setIsModalOpen };
}
