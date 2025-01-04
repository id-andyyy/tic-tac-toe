interface Props {
  onClick: () => void;
  winnerInfo: { winner: string | null; pattern: number[] | null };
}

export function GameReset({ onClick, winnerInfo }: Props) {
  return (
    <>
      {winnerInfo.winner && (
        <button
          className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded"
          onClick={onClick}
        >
          Restart
        </button>
      )}
    </>
  );
}
