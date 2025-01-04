import { GameCell } from "@/components/game/GameCell";
interface Props {
  board: (string | null)[];
  highlightCells: number[];
  onCellClick: (index: number) => void;
}

export function GameBoard({ board, highlightCells, onCellClick }: Props) {
  return (
    <div className="grid grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)] pt-px pl-px">
      {board.map((symbol, index) => (
        <GameCell
          highlight={highlightCells.includes(index)}
          onClick={() => onCellClick(index)}
          key={index}
        >
          {symbol || ""}
        </GameCell>
      ))}
    </div>
  );
}
