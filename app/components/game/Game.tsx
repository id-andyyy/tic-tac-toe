"use client";

import { GameTitle } from "@components/game/GameTitle";
import { GameInfo } from "@components/game/GameInfo";
import { GameField } from "@components/game/GameField";
import { useState } from "react";
import { useGameState } from "@components/game/useGameState";
import { GameSymbol } from "./GameSymbol";

export function Game() {
  const [playersCount] = useState(2);
  const {
    cells,
    currentPlayer,
    nextPlayer,
    handleCellClick,
    handlePlayerTimeOver,
    winnerIndexes,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <>
      <GameTitle className="mb-4" playersCount={playersCount} />
      <GameInfo
        className="mb-4"
        currentPlayer={currentPlayer}
        isWinner={!!winnerSymbol}
        onPlayerTimeOver={handlePlayerTimeOver}
        playersCount={playersCount}
      />
      <div>{winnerSymbol && <GameSymbol symbol={winnerSymbol} />}</div>
      <GameField
        cells={cells}
        currentPlayer={currentPlayer}
        nextPlayer={nextPlayer}
        handleCellClick={handleCellClick}
        winnerIndexes={winnerIndexes}
        winnerSymbol={winnerSymbol}
      />
    </>
  );
}
