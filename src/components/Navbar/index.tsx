import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import menuOptions from "./menuOptions";

import useAuthStore from "@/stores/auth-store";
import useScreenNameStore from "@/stores/screen-name-store";

export default function Navbar() {
  const { setIsAuthenticated } = useAuthStore();
  const { setScreenName } = useScreenNameStore();
  const { push } = useRouter();
  const pathname = usePathname();

  const [isExpanded, setIsExpanded] = useState(false);
  const [showSubRoute, setShowSubRoute] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <div
      className={`bg-themis-orange h-screen flex flex-col justify-between py-8 transition-all duration-300 ease-in-out ${
        isExpanded ? "w-52 items-start pl-4" : "w-20 items-center"
      } `}
    >
      <div>
        <div className="relative">
          <Image
            src={`${isExpanded ? "/logo-text.svg" : "/logo-min.svg"}`}
            alt="logo"
            width={isExpanded ? 157 : 41}
            height={0}
            className="transition-all duration-300 ease-in-out"
          />
          <button onClick={() => setIsExpanded(!isExpanded)}>
            <Image
              src="/icons/chevron-right.svg"
              alt="icon"
              width={30}
              height={0}
              className={`absolute transition-all duration-300 ease-in-out ${
                isExpanded ? "left-44 rotate-180" : "left-11"
              } top-6 transform -translate-y-1/2`}
            />
          </button>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          {menuOptions.map((option) => (
            <div key={option.id}>
              <button
                className="flex items-center transition-all duration-300 ease-in-out"
                onClick={() => {
                  if (option.name === "Cadastros") {
                    setIsExpanded(true);
                    setShowSubRoute(!showSubRoute);
                    setSelectedMenu(option.id);
                    setScreenName({
                      menuItemPage: "Cadastros",
                      itemPage: "",
                      screenName: "",
                    });
                  } else {
                    setScreenName({
                      menuItemPage: option.name,
                      itemPage: option.pageName,
                      screenName: option.pageName,
                    });
                    push(option.navigate);
                    setSelectedMenu(option.id);
                    setShowSubRoute(false);
                  }
                }}
              >
                <div
                  className={`${
                    selectedMenu === option.id
                      ? "bg-orange-300 border-r border-r-themis-orange"
                      : "bg-white"
                  } w-12 h-12 ${
                    isExpanded && "left-2"
                  } relative rounded-full flex justify-center items-center`}
                >
                  <Image src={option.icon} width={26} height={0} alt="icon" />
                </div>
                {isExpanded && (
                  <span
                    className={`font-medium text-left pl-4 text-lg w-32 rounded-e-2xl py-1 text-white transition-all duration-700 ease-in-out ${
                      selectedMenu === option.id &&
                      "bg-orange-300 text-[#212121]"
                    }`}
                  >
                    {option.name}
                  </span>
                )}
              </button>
              {option.name === "Cadastros" && (
                <AnimatePresence>
                  {isExpanded && showSubRoute && (
                    <motion.div
                      className="flex flex-col border-l-[3px] border-orange-300 ml-8 mt-2 pl-10 gap-5"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {option.subRoutes?.map((route, index) => (
                        <button
                          key={route.id}
                          onClick={() => {
                            push(route.navigate);
                            setSelectedMenu(option.id);
                            const subRoutesMap = option.subRoutes?.map(
                              (route) => route.pageName
                            );
                            console.log(subRoutesMap);
                            setScreenName({
                              menuItemPage: "Cadastros",
                              itemPage: subRoutesMap[index],
                              screenName: subRoutesMap[index],
                            });
                          }}
                        >
                          <p
                            className={`${
                              pathname === route.routeName
                                ? "text-[#212121]"
                                : "text-white"
                            } text-left`}
                          >
                            {route.name}
                          </p>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        className="flex items-center gap-5"
        onClick={() => setIsAuthenticated(false)}
      >
        <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
          <Image
            src="/icons/logout-icon.svg"
            width={26}
            height={0}
            alt="icon"
          />
        </div>
        {isExpanded && (
          <span className="font-medium text-lg text-white transition-all duration-300 ease-in-out">
            Sair
          </span>
        )}
      </button>
    </div>
  );
}
