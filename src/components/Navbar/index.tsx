import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import menuOptions from "./menuOptions";
import { Dispatch, SetStateAction } from "react";

import useAuthStore from "@/stores/auth-store";

interface NavbarProps {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ isExpanded, setIsExpanded }: NavbarProps) {
  const { push } = useRouter();
  const { setIsAuthenticated } = useAuthStore();
  const pathname = usePathname();

  return (
    <div
      className={`bg-themis-orange h-screen flex flex-col justify-between py-8 transition-all duration-300 ${
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
            className="transition-all duration-300"
          />
          <button onClick={() => setIsExpanded(!isExpanded)}>
            <Image
              src="/icons/chevron-right.svg"
              alt="icon"
              width={30}
              height={0}
              className={`absolute transition-all duration-300 ${
                isExpanded ? "left-44 rotate-180" : "left-11"
              } top-6 transform -translate-y-1/2`}
            />
          </button>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          {menuOptions.map((option) => (
            <button
              key={option.id}
              className="flex items-center gap-5 transition-all duration-300"
              onClick={() => push(option.navigate)}
            >
              <div
                className={`${
                  pathname === option.routeName ? "bg-orange-300" : "bg-white"
                } w-10 h-10 rounded-full flex justify-center items-center`}
              >
                <Image src={option.icon} width={26} height={0} alt="icon" />
              </div>
              {isExpanded && (
                <span className="font-medium text-lg text-white transition-all duration-300">
                  {option.name}
                </span>
              )}
            </button>
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
          <span className="font-medium text-lg text-white transition-all duration-300">
            Sair
          </span>
        )}
      </button>
    </div>
  );
}
