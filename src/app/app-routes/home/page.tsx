"use client";

import Image from "next/image";
import useViewModel from "./useViewModel";
import GreenActionButton from "@/components/GreenActionButton";
import KanbanFrame from "./KanbanFrame";
import KanbanList from "./KanbanList";

export default function Home() {
  const { isAuthenticated, visualizeList, setVisualizeList } = useViewModel();

  if (!isAuthenticated) return null;

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-5">
          <div>
            <button
              className={`${
                !visualizeList && "bg-themis-light-gray"
              } border border-r-0 rounded-tl rounded-bl p-2 border-themis-border`}
              onClick={() => setVisualizeList(false)}
            >
              <Image
                src="/icons/window-icon.svg"
                width={26}
                height={0}
                alt="icon"
              />
            </button>
            <button
              className={`${
                visualizeList && "bg-themis-light-gray"
              } border rounded-tr rounded-br p-2 border-themis-border`}
              onClick={() => setVisualizeList(true)}
            >
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
        <div className="flex items-center gap-2">
          {visualizeList && (
            <div>
              <button className="bg-themis-light-gray py-2 px-4 border border-themis-border border-r-0 rounded-tl rounded-bl">
                <span className="font-semibold text-sm text-themis-text-gray">
                  Em andandamento
                </span>
              </button>
              <button className="py-2 px-4 border border-themis-border rounded-tr rounded-br">
                <span className="font-semibold text-sm text-themis-text-gray">
                  Arquivados
                </span>
              </button>
            </div>
          )}
          <button className="bg-themis-light-gray p-2 rounded">
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
      {visualizeList ? <KanbanList /> : <KanbanFrame />}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-black rounded-full flex justify-center items-center z-50 hover:scale-105 ease-in-out transition-all duration-300">
        <Image
          src="/icons/question-icon.svg"
          width={26}
          height={26}
          alt="icon"
        />
      </button>
    </div>
  );
}
