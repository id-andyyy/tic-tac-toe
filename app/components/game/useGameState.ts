import { useState } from "react";
import { GAME_SYMBOLS } from "@components/game/constants";
import { getNextPlayer, getWinnerIndexes } from "./model";

export function useGameState(playersCount: number): {
  cells: (string | null)[];
  currentPlayer: string;
  nextPlayer: string;
  handleCellClick: (index: number) => void;
  winnerIndexes: number[] | undefined;
} {
  const [{ cells, currentPlayer }, setGameState] = useState(() => ({
    cells: new Array(12 * 12).fill(null),
    currentPlayer: GAME_SYMBOLS.CROSS,
  }));
  const nextPlayer = getNextPlayer(currentPlayer, playersCount);

  const winnerIndexes = getWinnerIndexes(cells, 5, 12);

  function handleCellClick(index: number) {
    setGameState((prevGameState) => {
      if (prevGameState.cells[index]) {
        return prevGameState;
      }
      return {
        ...prevGameState,
        cells: prevGameState.cells.map((cell, cellIndex) =>
          cellIndex === index ? prevGameState.currentPlayer : cell,
        ),
        currentPlayer: getNextPlayer(prevGameState.currentPlayer, playersCount),
      };
    });
  }

  return {
    cells,
    currentPlayer,
    nextPlayer,
    handleCellClick,
    winnerIndexes,
  };
}
