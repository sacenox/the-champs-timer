import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Button from "./molecules/buttons";
import { RowContainer } from "./molecules/containers";

const Header: React.FC<{
  isSettingsOpen: boolean;
  handleSettingsOpen: () => void;
}> = ({ isSettingsOpen, handleSettingsOpen }) => {
  return (
    <RowContainer className="p-4 border-b border-slate-400 dark:border-slate-600">
      <h1 className="text-lg font-bold">The Champ's Timer 🥊</h1>

      <Button onClick={handleSettingsOpen}>
        {isSettingsOpen ? (
          <XMarkIcon className="size-6" />
        ) : (
          <AdjustmentsHorizontalIcon className="size-6" />
        )}
      </Button>
    </RowContainer>
  );
};

export default Header;
