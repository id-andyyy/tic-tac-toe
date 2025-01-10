"use client";

import { GameTitle } from "@components/game/GameTitle";
import { GameInfo } from "@components/game/GameInfo";
import { GameField } from "@components/game/GameField";
import { useState } from "react";
import { useGameState } from "@components/game/useGameState";
import { UiButton, UiModal } from "@components/uikit";
import { GameSymbol } from "./GameSymbol";

export function Game() {
  const [playersCount] = useState(2);
  const {
    cells,
    currentPlayer,
    nextPlayer,
    handleCellClick,
    handlePlayerTimeOver,
    winnerIndexes,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <>
      <GameTitle className="mb-4" playersCount={playersCount} />
      <GameInfo
        className="mb-4"
        currentPlayer={currentPlayer}
        isWinner={!!winnerSymbol}
        onPlayerTimeOver={handlePlayerTimeOver}
        playersCount={playersCount}
      />
      <UiModal
        isOpen={!!winnerSymbol}
        onClose={() => console.log("close")}
        width="md"
      >
        <UiModal.Header>Игра завершена </UiModal.Header>
        <UiModal.Body>
          <div className="font-medium text-lg">
            Победитель: <span>@id_andyyy</span>
            <div>{winnerSymbol && <GameSymbol symbol={winnerSymbol} />}</div>
          </div>
        </UiModal.Body>
        <UiModal.Footer>
          <UiButton type="modern">Далее</UiButton>
          <UiButton type="inactiveBorder">Вернуться</UiButton>
        </UiModal.Footer>
      </UiModal>
      <GameField
        cells={cells}
        currentPlayer={currentPlayer}
        nextPlayer={nextPlayer}
        handleCellClick={handleCellClick}
        winnerIndexes={winnerIndexes}
        winnerSymbol={winnerSymbol}
      />
    </>
  );
}
