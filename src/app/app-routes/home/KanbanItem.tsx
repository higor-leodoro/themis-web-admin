export default function KanbanItem() {
  return (
    <div className="flex flex-col gap-1 p-2 rounded bg-white border shadow-sm">
      <div className="flex justify-between items-center">
        <p>Relatório 2546</p>
        <p>05/10/2024</p>
      </div>
      <p className="text-themis-text-light-gray text-sm">
        Responsável Técnico: Beatriz Fonseca
      </p>
      <p className="text-themis-text-light-gray text-sm">Local: 1245</p>
    </div>
  );
}
