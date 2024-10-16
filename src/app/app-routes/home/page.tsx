"use client";

import Image from "next/image";
import useViewModel from "./useViewModel";
import GreenActionButton from "@/components/GreenActionButton";

export default function Home() {
  const { isAuthenticated } = useViewModel();

  if (!isAuthenticated) return null;

  const kanban = [
    { id: "1", title: "Gerado" },
    { id: "2", title: "Iniciado" },
    { id: "3", title: "Finalizado" },
    { id: "4", title: "Arquivado" },
  ];

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-5">
          <div>
            <button className="bg-themis-light-gray border border-r-0 rounded-tl rounded-bl p-2 border-themis-slate">
              <Image
                src="/icons/window-icon.svg"
                width={26}
                height={0}
                alt="icon"
              />
            </button>
            <button className="border rounded-tr rounded-br p-2 border-themis-slate">
              <Image
                src="/icons/list-icon.svg"
                width={26}
                height={0}
                alt="icon"
              />
            </button>
          </div>
          <div>
            <GreenActionButton text="+ Novo registro" />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-themis-light-gray p-2">
            <Image
              src="/icons/share-icon.svg"
              width={26}
              height={0}
              alt="icon"
            />
          </button>
          <button className="bg-black p-2 rounded">
            <Image
              src="/icons/funel-icon.svg"
              width={26}
              height={0}
              alt="icon"
            />
          </button>
        </div>
      </div>

      <div className="flex justify-between gap-4 h-full overflow-hidden">
        {kanban.map((frame, key) => (
          <div
            key={key}
            className="bg-themis-light-gray flex-grow rounded-lg p-4 shadow-md overflow-auto"
          >
            <h1 className="font-medium text-xl text-themis-medium-gray">
              {frame.title}
            </h1>
            <p className="text-[11px] text-themis-slate">
              X relatórios no total
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
