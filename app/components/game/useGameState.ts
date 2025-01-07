import { useState } from "react";
import { GAME_SYMBOLS, PLAYERS_ORDER } from "@components/game/constants";

function getNextPlayer(currentPlayer: string, playersCount: number) {
  const nextPlayerIndex = PLAYERS_ORDER.indexOf(currentPlayer) + 1;
  return (
    PLAYERS_ORDER.slice(0, playersCount)[nextPlayerIndex] ?? PLAYERS_ORDER[0]
  );
}

export function useGameState(playersCount: number) {
  const [{ cells, currentPlayer }, setGameState] = useState(() => ({
    cells: new Array(12 * 12).fill(null),
    currentPlayer: GAME_SYMBOLS.CROSS,
  }));
  const nextPlayer = getNextPlayer(currentPlayer, playersCount);

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
  };
}
