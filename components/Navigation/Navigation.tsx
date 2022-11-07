import Link from "next/link";
import React, { FC } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useRouter } from "next/router";

interface INavigation {
  setAnchor: (e: boolean) => void;
}

const Navigation: FC<INavigation> = ({ setAnchor }) => {
  const router = useRouter();

  const hideMenu = () => setAnchor(false);
  const handleClick = (link: string) => {
    router.push(link);
    hideMenu();
  };

  return (
    <nav className="flex flex-col">
      <div
        className="flex items-center gap-3 px-5 py-3 hover:bg-gray-200 font-medium cursor-pointer"
        onClick={() => handleClick("/")}
      >
        <TrendingUpIcon />
        <span>Прибыльность</span>
      </div>
    </nav>
  );
};

export default Navigation;
