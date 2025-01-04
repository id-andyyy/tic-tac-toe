import { SYMBOL_O, SYMBOL_X } from "@/constants/game/gameSymbols";
import { useState } from "react";

function checkWinner(board: (string | null)[]): {
  winner: string | null;
  pattern: number[] | null;
} {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return { winner: board[a], pattern };
    }
  }

  return board.includes(null)
    ? { winner: null, pattern: null }
    : { winner: "draw", pattern: null };
}

export function useGameState() {
  const initialBoard = new Array(9).fill(null);
  const [{ board, currentPlayer, winnerInfo }, setGameState] = useState<{
    board: (string | null)[];
    currentPlayer: string;
    winnerInfo: {
      winner: string | null;
      pattern: number[] | null;
    };
  }>(() => ({
    board: initialBoard,
    currentPlayer: SYMBOL_X,
    winnerInfo: { winner: null, pattern: null },
  }));

  function handleCellClick(index: number): void {
    if (board[index] || winnerInfo.winner) return;

    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    setGameState((lastGameState) => ({
      ...lastGameState,
      board: newBoard,
    }));

    const result = checkWinner(newBoard);

    if (result.winner) {
      setGameState((lastGameState) => ({
        ...lastGameState,
        winnerInfo: result,
      }));
    } else {
      setGameState((lastGameState) => ({
        ...lastGameState,
        currentPlayer: currentPlayer === SYMBOL_X ? SYMBOL_O : SYMBOL_X,
      }));
    }
  }

  function resetGame(): void {
    setGameState((lastGameState) => ({
      ...lastGameState,
      board: initialBoard,
      currentPlayer: SYMBOL_X,
      winnerInfo: { winner: null, pattern: null },
    }));
  }

  return { board, currentPlayer, winnerInfo, handleCellClick, resetGame };
}
