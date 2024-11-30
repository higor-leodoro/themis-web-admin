import { useState } from "react";

export default function useViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const groups = [
    {
      id: "2457",
      name: "STS 012",
      identification: "OKSDFT",
      state: "PR",
      city: "Curitiba",
      neighborhood: "Centro",
    },
    {
      id: "2458",
      name: "STS 002",
      identification: "11GFDC",
      state: "PR",
      city: "Curitiba",
      neighborhood: "Centro",
    },
  ];

  const tableHeader = [
    { key: "id", label: "id da unidade" },
    { key: "name", label: "nome da unidade" },
    { key: "identification", label: "identificação" },
    { key: "state", label: "estado" },
    { key: "city", label: "cidade" },
    { key: "neighborhood", label: "bairro" },
    { key: "status", label: "status" },
  ];

  return { groups, tableHeader, isModalOpen, setIsModalOpen };
}
