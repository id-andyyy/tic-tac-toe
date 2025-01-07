"use client";

import { UiButton } from "@components/uikit";
import { GameSymbol } from "@components/game/GameSymbol";
import { ReactNode } from "react";
import { useGameState } from "./useGameState";

export function GameField() {
  const { cells, currentPlayer, nextPlayer, handleCellClick } = useGameState();

  return (
    <GameFieldLayout>
      <GameFieldInfo currentPlayer={currentPlayer} nextPlayer={nextPlayer} />
      <GameFieldGrid>
        {cells.map((symbol, index) => (
          <GameFieldCell key={index} onClick={() => handleCellClick(index)}>
            {symbol && <GameSymbol className="w-9 h-9" symbol={symbol} />}
          </GameFieldCell>
        ))}
      </GameFieldGrid>
    </GameFieldLayout>
  );
}

interface GameFieldLayoutProps {
  children: ReactNode;
}

function GameFieldLayout({ children }: GameFieldLayoutProps) {
  return <div className="p-7 bg-white rounded-3xl shadow-md">{children}</div>;
}

interface GameFieldInfoProps {
  currentPlayer: string;
  nextPlayer: string;
}

function GameFieldInfo({ currentPlayer, nextPlayer }: GameFieldInfoProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="font-semibold">
        <div className="text-xl flex items-center gap-1">
          Ход: <GameSymbol symbol={currentPlayer} />
        </div>
        <div className="text-xs text-inactive flex items-center gap-1">
          Следующий: <GameSymbol className="w-4 h-4" symbol={nextPlayer} />
        </div>
      </div>
      <UiButton className="" size="md" type="inactive">
        Сдаться
      </UiButton>
    </div>
  );
}

interface GameFieldGridProps {
  children: ReactNode;
}

function GameFieldGrid({ children }: GameFieldGridProps) {
  return (
    <div className="grid grid-cols-[repeat(12,_60px)] grid-rows-[repeat(12,_60px)] pt-px pl-px mx-auto">
      {children}
    </div>
  );
}

interface GameFieldCellProps {
  children?: ReactNode;
  onClick: () => void;
}

function GameFieldCell({ children, onClick }: GameFieldCellProps) {
  return (
    <button
      className="border border-gray-400 -mt-px -ml-px flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
