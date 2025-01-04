"use client";

import { GameStatus } from "@components/game/GameStatus";
import { GameBoard } from "@components/game/GameBoard";
import { useGameState } from "@hooks/game/useGameState";
import { GameReset } from "@components/game/GameReset";

export function Game() {
  const { board, currentPlayer, winnerInfo, handleCellClick, resetGame } =
    useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-32 p-5 border border-solid border-black">
      <GameStatus currentPlayer={currentPlayer} winnerInfo={winnerInfo} />
      <GameBoard
        board={board}
        highlightCells={winnerInfo.pattern ? winnerInfo.pattern : []}
        onCellClick={handleCellClick}
      />
      <GameReset onClick={resetGame} winnerInfo={winnerInfo} />
    </div>
  );
}
