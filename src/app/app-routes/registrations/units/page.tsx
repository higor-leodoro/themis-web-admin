"use client";

import MetricsCard from "@/components/MetricsCard";
import GreenActionButton from "@/components/GreenActionButton";
import RegistrationsList from "@/components/RegistrationsList";
import Modal from "@/components/Modal";

import useViewModel from "./useViewModel";
import RegisterUnityForm from "./RegisterUnityForm";

export default function Groups() {
  const { tableHeader, groups, isModalOpen, setIsModalOpen } = useViewModel();
  return (
    <div className="flex flex-col h-screen px-4 py-4">
      <div className="flex gap-5">
        <MetricsCard
          title="Total de unidades cadastradas"
          quantity="15"
          color="themis-near-black"
        />
        <MetricsCard
          title="Total de unidades ativas"
          quantity="10"
          color="themis-orange"
        />
        <MetricsCard
          title="Total de unidades inativas"
          quantity="5"
          color="themis-silver"
        />
      </div>
      <div className="mt-3">
        <GreenActionButton
          title="+ Cadastrar nova unidade"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div className="flex-1 mt-2 mb-4 overflow-hidden pb-16">
        <RegistrationsList
          title="Unidades cadastradas"
          tableHeaders={tableHeader}
          listContent={groups}
        />
      </div>
      <Modal
        title="Cadastrar unidade"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <RegisterUnityForm />
      </Modal>
    </div>
  );
}
