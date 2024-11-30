export default function FormButtons() {
  return (
    <div className="flex justify-end gap-4">
      <button className="w-44 bg-themis-light-gray font-medium p-3 text-themis-text-light-gray rounded">
        Cancelar
      </button>
      <button className="w-44 bg-themis-orange p-3 font-medium text-white rounded">
        Cadastrar
      </button>
    </div>
  );
}
