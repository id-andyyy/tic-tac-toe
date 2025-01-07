"use client";

import { GameTitle } from "@components/game/GameTitle";
import { GameInfo } from "@components/game/GameInfo";
import { GameField } from "@components/game/GameField";
import { useState } from "react";
import { useGameState } from "@components/game/useGameState";

export function Game() {
  const [playersCount] = useState(4);
  const { cells, currentPlayer, nextPlayer, handleCellClick } =
    useGameState(playersCount);

  return (
    <>
      <GameTitle className="mb-6" playersCount={playersCount} />
      <GameInfo
        className="mb-6"
        currentPlayer={currentPlayer}
        playersCount={playersCount}
      />
      <GameField
        cells={cells}
        currentPlayer={currentPlayer}
        nextPlayer={nextPlayer}
        handleCellClick={handleCellClick}
      />
    </>
  );
}
