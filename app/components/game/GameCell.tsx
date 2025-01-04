import { GameSymbol } from "@/components/game/GameSymbol";
import clsx from "clsx";

interface Props {
  children: string;
  highlight: boolean;
  onClick: () => void;
}

export function GameCell({ children, highlight, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "border border-grey -mt-px -ml-px flex items-center justify-center bg-transparent",
        highlight && "bg-red-200",
      )}
    >
      <GameSymbol>{children}</GameSymbol>
    </button>
  );
}
