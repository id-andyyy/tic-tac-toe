import { GameSymbol } from "@/components/game/GameSymbol";

interface Props {
  currentPlayer: string;
  winnerInfo: { winner: string | null; pattern: number[] | null };
}

export function GameStatus({ currentPlayer, winnerInfo }: Props) {
  return (
    <div className="mb-3">
      {winnerInfo.winner ? (
        winnerInfo.winner === "draw" ? (
          "Ничья!"
        ) : (
          <>
            Победитель: <GameSymbol>{winnerInfo.winner}</GameSymbol>
          </>
        )
      ) : (
        <>
          Ход: <GameSymbol>{currentPlayer}</GameSymbol>
        </>
      )}
    </div>
  );
}
