const menuOptions = [
  {
    id: "1",
    name: "Dashboard",
    routeName: "/app-routes/home",
    icon: "/icons/document-icon.svg",
    navigate: "/app-routes/home",
    pageName: "Inicio",
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
        pageName: "Cadastro de usuários",
      },
      {
        id: "2",
        name: "Grupos",
        routeName: "/app-routes/groups",
        navigate: "/app-routes/groups",
        pageName: "Cadastro de grupos",
      },
      {
        id: "3",
        name: "Unidades",
        routeName: "/app-routes/units",
        navigate: "/app-routes/units",
        pageName: "Cadastro de unidades",
      },
    ],
    routeName: "Cadastros",
    icon: "/icons/users-icon.svg",
    navigate: "",
  },
  {
    id: "3",
    name: "Assinatura",
    routeName: "/app-routes/signature",
    icon: "/icons/pencil-icon.svg",
    navigate: "/app-routes/signature",
    pageName: "Assinar",
  },
  {
    id: "4",
    name: "Financeiro",
    routeName: "/app-routes/financial",
    icon: "/icons/sipher-icon.svg",
    navigate: "/app-routes/financial",
    pageName: "Dashboard financeiro",
  },
  {
    id: "5",
    name: "Ajustes",
    routeName: "/app-routes/settings",
    icon: "/icons/gear-icon.svg",
    navigate: "/app-routes/settings",
    pageName: "Configurações",
  },
];

export default menuOptions;
