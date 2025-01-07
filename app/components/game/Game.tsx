import { GameTitle } from "@components/game/GameTitle";
import { GameInfo } from "@components/game/GameInfo";
import { GameField } from "@components/game/GameField";

export function Game() {
  return (
    <>
      <GameTitle className="mb-6" />
      <GameInfo className="mb-6" />
      <GameField />
    </>
  );
}
