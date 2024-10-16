import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 border-b shadow-md">
      <div>
        <p className="text-xs text-slate-400">Home/ Dashboard</p>
        <h1 className="font-medium text-2xl text-themis-medium-gray">Inicio</h1>
      </div>
      <div className="w-80">
        <div className="relative">
          <input
            type="text"
            placeholder="pesquisar dados"
            className="w-full px-4 py-1 border rounded-3xl"
          />
          <Image
            src="/icons/search-icon.svg"
            width={20}
            height={0}
            alt="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-11 h-11 bg-themis-light-gray rounded-full flex justify-center items-center">
          <Image src="/icons/bell-icon.svg" width={28} height={0} alt="icon" />
        </button>
        <div className="flex items-center gap-4 bg-themis-light-gray pl-4 pr-2 py-2 rounded-[52px]">
          <div>
            <p className="text-themis-orange">User Name</p>
            <p className="text-sm">User Type</p>
          </div>
          <div>
            <Image
              src="/icons/avatar-icon.svg"
              width={47}
              height={0}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
