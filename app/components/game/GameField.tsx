"use client";

import { UiButton } from "@components/uikit";
import { GameSymbol } from "@components/game/GameSymbol";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  cells: (string | null)[];
  currentPlayer: string;
  nextPlayer: string;
  handleCellClick: (index: number) => void;
  winnerIndexes: number[] | undefined;
  winnerSymbol: string | null;
}

export function GameField({
  cells,
  currentPlayer,
  nextPlayer,
  handleCellClick,
  winnerIndexes,
  winnerSymbol,
}: Props) {
  return (
    <Layout>
      <Info currentPlayer={currentPlayer} nextPlayer={nextPlayer} />
      <Grid>
        {cells.map((symbol, index) => (
          <Cell
            key={index}
            disabled={!!winnerSymbol}
            onClick={() => handleCellClick(index)}
            isWinner={winnerIndexes?.includes(index)}
          >
            {symbol && <GameSymbol className="w-9 h-9" symbol={symbol} />}
          </Cell>
        ))}
      </Grid>
    </Layout>
  );
}

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="px-7 py-5 bg-white rounded-3xl shadow-md flex flex-col">
      {children}
    </div>
  );
}

interface InfoProps {
  currentPlayer: string;
  nextPlayer: string;
}

function Info({ currentPlayer, nextPlayer }: InfoProps) {
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

interface GridProps {
  children: ReactNode;
}

function Grid({ children }: GridProps) {
  return (
    <div className="grid grid-cols-[repeat(12,_52px)] grid-rows-[repeat(12,_52px)] pt-px pl-px mx-auto">
      {children}
    </div>
  );
}

interface CellProps {
  children?: ReactNode;
  disabled: boolean;
  isWinner: boolean | undefined;
  onClick: () => void;
}

function Cell({ children, disabled, isWinner, onClick }: CellProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "border border-gray-400 -mt-px -ml-px flex items-center justify-center",
        isWinner && "bg-red-600/20",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
