"use client";

import MetricsCard from "@/components/MetricsCard";
import GreenActionButton from "@/components/GreenActionButton";
import RegistrationsList from "@/components/RegistrationsList";

export default function Users() {
  return (
    <div className="flex flex-col h-screen px-4 py-4">
      <div className="flex gap-5">
        <MetricsCard
          title="Total de usuários cadastrados"
          quantity="15"
          color="themis-near-black"
        />
        <MetricsCard
          title="Total de usuários ativos"
          quantity="11"
          color="themis-orange"
        />
        <MetricsCard
          title="Total de usuários inativos"
          quantity="4"
          color="themis-silver"
        />
      </div>
      <div className="mt-3">
        <GreenActionButton title="+ Cadastrar novo usuário" />
      </div>
      <div className="flex-1 mt-2 mb-4 overflow-hidden pb-16">
        <RegistrationsList />
      </div>
    </div>
  );
}
