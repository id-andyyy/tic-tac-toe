"use client";

import { UiButton } from "@components/uikit";
import { GameSymbol } from "@components/game/GameSymbol";
import { ReactNode } from "react";

interface Props {
  cells: (string | null)[];
  currentPlayer: string;
  nextPlayer: string;
  handleCellClick: (index: number) => void;
}

export function GameField({
  cells,
  currentPlayer,
  nextPlayer,
  handleCellClick,
}: Props) {
  return (
    <Layout>
      <Info currentPlayer={currentPlayer} nextPlayer={nextPlayer} />
      <Grid>
        {cells.map((symbol, index) => (
          <Cell key={index} onClick={() => handleCellClick(index)}>
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
    <div className="p-7 bg-white rounded-3xl shadow-md flex flex-col">
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
    <div className="grid grid-cols-[repeat(12,_60px)] grid-rows-[repeat(12,_60px)] pt-px pl-px mx-auto">
      {children}
    </div>
  );
}

interface CellProps {
  children?: ReactNode;
  onClick: () => void;
}

function Cell({ children, onClick }: CellProps) {
  return (
    <button
      className="border border-gray-400 -mt-px -ml-px flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
