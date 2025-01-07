"use client";

import { GameTitle } from "@components/game/GameTitle";
import { GameInfo } from "@components/game/GameInfo";
import { GameField } from "@components/game/GameField";
import { useState } from "react";

export function Game() {
  const [playersCount] = useState(4);

  return (
    <>
      <GameTitle className="mb-6" playersCount={playersCount} />
      <GameInfo className="mb-6" playersCount={playersCount} />
      <GameField playersCount={playersCount} />
    </>
  );
}
