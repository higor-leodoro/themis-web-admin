import { useState } from "react";
import Image from "next/image";
import Switch from "react-switch";

type TableHeader = {
  key: string;
  label: string;
};

type RegistrationsListProps = {
  title: string;
  tableHeaders: TableHeader[];
  listContent: any[];
};

export default function RegistrationsList({
  title,
  tableHeaders,
  listContent,
}: RegistrationsListProps) {
  const [switchStates, setSwitchStates] = useState<Record<string, boolean>>({});

  const toggleSwitch = (key: string) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const gridColsClasses: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
  };

  const totalColumns = tableHeaders.length;
  const gridClass = gridColsClasses[totalColumns] || "grid-cols-1";

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="font-medium text-2xl">{title}</p>
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
        <div className={`grid ${gridClass} bg-themis-light-gray p-2`}>
          {tableHeaders.map((header, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <div>
                <p className="uppercase text-center text-xs font-semibold">
                  {header.label}
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
          {listContent.map((listItem: any) => (
            <div
              key={listItem.id}
              className={`grid ${gridClass} text-center place-items-center text-sm`}
            >
              {tableHeaders.map((header, idx) => (
                <div key={idx} className="py-3">
                  {header.key === "status" ? (
                    <div className="flex items-center">
                      <Switch
                        checked={!!switchStates[listItem.id]}
                        onChange={() => toggleSwitch(listItem.id)}
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
                  ) : (
                    <p>{listItem[header.key]}</p>
                  )}
                </div>
              ))}
              <hr className="w-full col-span-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
