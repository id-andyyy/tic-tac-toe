import { useState } from "react";
import { GAME_SYMBOLS } from "@components/game/constants";
import { getNextPlayer, getWinnerIndexes } from "./model";

export function useGameState(playersCount: number): {
  cells: (string | null)[];
  currentPlayer: string;
  nextPlayer: string;
  handleCellClick: (index: number) => void;
  handlePlayerTimeOver: (symbol: string) => void;
  winnerIndexes: number[] | undefined;
  winnerSymbol: string | null;
} {
  interface GameState {
    cells: (string | null)[];
    currentPlayer: string;
    playersTimeOver: string[];
  }

  const [{ cells, currentPlayer, playersTimeOver }, setGameState] =
    useState<GameState>(() => ({
      cells: new Array(12 * 12).fill(null),
      currentPlayer: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    }));
  const nextPlayer = getNextPlayer(
    currentPlayer,
    playersCount,
    playersTimeOver,
  );

  const winnerIndexes = getWinnerIndexes(cells, 5, 12);
  let winnerSymbol;
  if (nextPlayer === currentPlayer) {
    winnerSymbol = currentPlayer;
  } else if (winnerIndexes) {
    winnerSymbol = cells[winnerIndexes[0]];
  } else {
    winnerSymbol = null;
  }

  function handleCellClick(index: number): void {
    setGameState((prevGameState) => {
      if (prevGameState.cells[index]) {
        return prevGameState;
      }
      return {
        ...prevGameState,
        cells: prevGameState.cells.map((cell, cellIndex) =>
          cellIndex === index ? prevGameState.currentPlayer : cell,
        ),
        currentPlayer: getNextPlayer(
          prevGameState.currentPlayer,
          playersCount,
          prevGameState.playersTimeOver,
        ),
      };
    });
  }

  function handlePlayerTimeOver(symbol: string): void {
    setGameState((prevGameState) => {
      return {
        ...prevGameState,
        playersTimeOver: [...prevGameState.playersTimeOver, symbol],
        currentPlayer: getNextPlayer(
          prevGameState.currentPlayer,
          playersCount,
          prevGameState.playersTimeOver,
        ),
      };
    });
  }

  return {
    cells,
    currentPlayer,
    nextPlayer,
    handleCellClick,
    handlePlayerTimeOver,
    winnerIndexes,
    winnerSymbol,
  };
}
