import KanbanItem from "./KanbanItem";

export default function KanbanFrame() {
  return (
    <div className="flex justify-between gap-4 h-full overflow-hidden">
      <div className="bg-themis-light-gray flex-grow rounded-lg p-4 shadow-md overflow-auto">
        <h1 className="font-medium text-xl text-themis-medium-gray">Gerado</h1>
        <p className="text-[11px] text-themis-slate">3 relatórios no total</p>
        <div className="flex flex-col gap-2 mt-2">
          {Array.from({ length: 3 }).map((_, key) => (
            <KanbanItem key={key} />
          ))}
        </div>
      </div>
      <div className="bg-themis-light-gray flex-grow rounded-lg p-4 shadow-md overflow-auto">
        <h1 className="font-medium text-xl text-themis-medium-gray">
          Iniciado
        </h1>
        <p className="text-[11px] text-themis-slate">5 relatórios no total</p>
        <div className="flex flex-col gap-2 mt-2">
          {Array.from({ length: 5 }).map((_, key) => (
            <KanbanItem key={key} />
          ))}
        </div>
      </div>
      <div className="bg-themis-light-gray flex-grow rounded-lg p-4 shadow-md overflow-auto">
        <h1 className="font-medium text-xl text-themis-medium-gray">
          Finalizado
        </h1>
        <p className="text-[11px] text-themis-slate">1 relatórios no total</p>
        <div className="flex flex-col gap-2 mt-2">
          {Array.from({ length: 1 }).map((_, key) => (
            <KanbanItem key={key} />
          ))}
        </div>
      </div>
      <div className="bg-themis-light-gray flex-grow rounded-lg p-4 shadow-md overflow-auto">
        <h1 className="font-medium text-xl text-themis-medium-gray">
          Arquivado
        </h1>
        <p className="text-[11px] text-themis-slate">152 relatórios no total</p>
        <div className="flex flex-col gap-2 mt-2">
          {Array.from({ length: 152 }).map((_, key) => (
            <KanbanItem key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
