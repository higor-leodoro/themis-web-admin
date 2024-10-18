import Image from "next/image";
import { Checkbox } from "@mui/material";

export default function KanbanList() {
  const itemDescriptions = [
    { id: "1", title: "id do registro" },
    { id: "2", title: "criado" },
    { id: "3", title: "status" },
    { id: "4", title: "tipo de documento" },
    { id: "5", title: "local" },
    { id: "6", title: "técnico" },
  ];

  const items = [
    {
      id: "2453",
      date: "03/10/2024",
      status: "Iniciado",
      doc_type: "RF",
      unity: "3564",
      tec_name: "Breno Ribeiro dos Santos",
    },
    {
      id: "2560",
      date: "02/10/2024",
      status: "Gerado",
      doc_type: "RF",
      unity: "3542",
      tec_name: "Aline Melo Pereira",
    },
    {
      id: "1245",
      date: "01/10/2024",
      status: "Iniciado",
      doc_type: "RF",
      unity: "3124",
      tec_name: "Estevan Barros Costa",
    },
    {
      id: "3664",
      date: "07/10/2024",
      status: "Finalizado",
      doc_type: "RF",
      unity: "3932",
      tec_name: "Erick Araujo Costa",
    },
    {
      id: "8742",
      date: "05/10/2024",
      status: "Finalizado",
      doc_type: "RF",
      unity: "2415",
      tec_name: "Rodrigo Souza Araujo",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr_2fr_90px] bg-themis-light-gray w-full p-2 rounded">
        <div className=" ">
          <button className="w-6 h-6 flex justify-center items-center rounded bg-themis-orange">
            <Image
              src="/icons/check-icon.svg"
              width={15}
              height={15}
              alt="icon"
            />
          </button>
        </div>
        {itemDescriptions.map((item) => (
          <div
            key={item.id}
            className="w-full flex justify-center items-center "
          >
            <span className="font-semibold text-sm text-themis-slate uppercase">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      {items.map((item) => {
        let statusColor;
        if (item.status === "Iniciado") {
          statusColor = "bg-themis-green";
        } else if (item.status === "Gerado") {
          statusColor = "bg-themis-yellow";
        } else if (item.status === "Finalizado") {
          statusColor = "bg-themis-purple";
        }
        return (
          <div
            key={item.id}
            className="grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr_2fr_90px] items-center justify-center border-b border-themis-light-gray py-3"
          >
            <div>
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#F97615",
                  },
                }}
              />
            </div>
            <div className="text-center">
              <span>{item.id}</span>
            </div>
            <div className="text-center">
              <span>{item.date}</span>
            </div>
            <div className="flex justify-center">
              <div className={`${statusColor} w-24 p-1 rounded-3xl`}>
                <p className="font-semibold text-sm text-center text-white">
                  {item.status}
                </p>
              </div>
            </div>
            <div className="text-center">
              <span>{item.doc_type}</span>
            </div>
            <div className="text-center">
              <span>Unidade {item.unity}</span>
            </div>
            <div className="text-center">
              <span>{item.tec_name}</span>
            </div>
            <div className="flex justify-end pr-1 items-center gap-4">
              <button className="bg-themis-light-gray p-2 rounded">
                <Image
                  src="/icons/edit-icon.svg"
                  width={20}
                  height={20}
                  alt="icon"
                />
              </button>
              <button className="bg-themis-light-gray p-2 rounded">
                <Image
                  src="/icons/document-config-icon.svg"
                  width={18}
                  height={18}
                  alt="icon"
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
