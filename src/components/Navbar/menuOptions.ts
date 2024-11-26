const menuOptions = [
  {
    id: "1",
    name: "Dashboard",
    routeName: "/app-routes/home",
    icon: "/icons/document-icon.svg",
    navigate: "/app-routes/home",
  },
  {
    id: "2",
    name: "Cadastros",
    subRoutes: [
      {
        id: "1",
        name: "Usuários",
        routeName: "/app-routes/users",
        navigate: "/app-routes/users",
      },
      { id: "2", name: "Grupos", navigate: "" },
      { id: "3", name: "Unidades", navigate: "" },
    ],
    routeName: "Cadastros",
    icon: "/icons/users-icon.svg",
    navigate: "/app-routes/users",
  },
  {
    id: "3",
    name: "Assinatura",
    routeName: "/app-routes/signature",
    icon: "/icons/pencil-icon.svg",
    navigate: "/app-routes/signature",
  },
  {
    id: "4",
    name: "Financeiro",
    routeName: "/app-routes/financial",
    icon: "/icons/sipher-icon.svg",
    navigate: "/app-routes/financial",
  },
  {
    id: "5",
    name: "Ajustes",
    routeName: "/app-routes/settings",
    icon: "/icons/gear-icon.svg",
    navigate: "/app-routes/settings",
  },
];

export default menuOptions;
