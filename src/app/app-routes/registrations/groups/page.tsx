"use client";

import MetricsCard from "@/components/MetricsCard";
import GreenActionButton from "@/components/GreenActionButton";
import RegistrationsList from "@/components/RegistrationsList";
import Modal from "@/components/Modal";

import useViewModel from "./useViewModel";
import FormButtons from "@/components/FormButtons";

export default function Groups() {
  const { tableHeader, groups, isModalOpen, setIsModalOpen } = useViewModel();
  return (
    <div className="flex flex-col h-screen px-4 py-4">
      <div className="flex gap-5">
        <MetricsCard
          title="Total de grupos cadastrados"
          quantity="8"
          color="themis-near-black"
        />
        <MetricsCard
          title="Total de grupos ativos"
          quantity="6"
          color="themis-orange"
        />
        <MetricsCard
          title="Total de grupos inativos"
          quantity="2"
          color="themis-silver"
        />
      </div>
      <div className="mt-3">
        <GreenActionButton
          title="+ Cadastrar novo grupo"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div className="flex-1 mt-2 mb-4 overflow-hidden pb-16">
        <RegistrationsList
          title="Grupos cadastrados"
          tableHeaders={tableHeader}
          listContent={groups}
        />
      </div>
      <Modal
        title="Cadastrar Grupo"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <form className="mt-10 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-themis-text-gray ml-1">
              Nome do grupo
            </label>
            <input
              className="2xl:w-[539px] border pl-2 py-3 text-themis-text-gray rounded"
              type="text"
              placeholder="Digite o nome do grupo"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-themis-text-gray ml-1">
              Descrição do grupo
            </label>
            <textarea
              className="2xl:w-[539px] border pl-2 py-2 text-themis-text-gray rounded resize-none h-28"
              placeholder="Descrição"
            />
          </div>
          <hr />
          <FormButtons />
        </form>
      </Modal>
    </div>
  );
}
