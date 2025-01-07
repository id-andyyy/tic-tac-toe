import { useState } from "react";
import { GAME_SYMBOLS, PLAYERS_ORDER } from "@components/game/constants";

function getNextPlayer(currentPlayer: string) {
  const nextPlayerIndex = PLAYERS_ORDER.indexOf(currentPlayer) + 1;
  return PLAYERS_ORDER[nextPlayerIndex] ?? PLAYERS_ORDER[0];
}

export function useGameState() {
  const [{ cells, currentPlayer }, setGameState] = useState(() => ({
    cells: new Array(12 * 12).fill(null),
    currentPlayer: GAME_SYMBOLS.CROSS,
  }));
  const nextPlayer = getNextPlayer(currentPlayer);

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
        currentPlayer: getNextPlayer(prevGameState.currentPlayer),
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
