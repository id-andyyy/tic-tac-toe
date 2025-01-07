import { GameTitle, GameInfo, GameField } from "@components/game";

export function Game() {
  return (
    <>
      <GameTitle className="mb-6" />
      <GameInfo className="mb-6" />
      <GameField />
    </>
  );
}
