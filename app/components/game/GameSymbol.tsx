import { SYMBOL_X, SYMBOL_O } from "@constants/game/gameSymbols";
import clsx from "clsx";

interface Props {
  children: string | null;
}

export function GameSymbol({ children }: Props) {
  function getSymbolClassName(symbol: string | null) {
    if (symbol === SYMBOL_X) return "text-red-500";
    if (symbol === SYMBOL_O) return "text-green-500";
    return "";
  }

  return (
    <span className={clsx("text-xl", getSymbolClassName(children))}>
      {children}
    </span>
  );
}
