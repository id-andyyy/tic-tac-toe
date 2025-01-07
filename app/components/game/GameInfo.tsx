import { Profile } from "@components/profile";
import clsx from "clsx";
import { GameSymbol } from "@components/game/GameSymbol";
import { GAME_SYMBOLS } from "./constants";
import { StaticImageData } from "next/image";
import { SYMBOL_COLORS } from "../profile/constants";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    gameSymbol: GAME_SYMBOLS.CROSS,
    rating: 1203,
    username: "id_andyyy",
  },
  {
    id: 2,
    gameSymbol: GAME_SYMBOLS.ZERO,
    rating: 190,
    username: "mega_player",
  },
  {
    id: 3,
    gameSymbol: GAME_SYMBOLS.TRIANGLE,
    rating: 787,
    username: "super_player",
  },
  {
    id: 4,
    gameSymbol: GAME_SYMBOLS.SQUARE,
    rating: 1040,
    username: "ultra_player",
  },
];

interface Props {
  className?: string;
  currentPlayer: string;
  playersCount: number;
}

export function GameInfo({ className, currentPlayer, playersCount }: Props) {
  return (
    <div
      className={clsx(
        "p-7 bg-white rounded-3xl shadow-md flex justify-between flex-wrap gap-x-10 gap-y-5",
        className,
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          isRight={index % 2 !== 0}
          isTimer={currentPlayer == player.gameSymbol}
          playerInfo={player}
        />
      ))}
    </div>
  );
}

interface PlayerInfoProps {
  isRight: boolean;
  isTimer: boolean;
  playerInfo: {
    avatarSrc?: StaticImageData;
    gameSymbol: string;
    rating: number;
    username: string;
  };
}

function PlayerInfo({ isRight, isTimer, playerInfo }: PlayerInfoProps) {
  const [seconds, setSeconds] = useState(60);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  useEffect(() => {
    if (isTimer) {
      const interval = setInterval(
        () => setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0)),
        1000,
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [isTimer]);

  return (
    <div
      className={clsx("flex items-center gap-3", isRight && "flex-row-reverse")}
    >
      <div className="relative">
        <Profile
          className="max-h-12"
          avatarSrc={playerInfo.avatarSrc}
          rating={playerInfo.rating}
          userColor={SYMBOL_COLORS[playerInfo.gameSymbol]}
          username={playerInfo.username}
        ></Profile>
        <div className="w-6 h-6 bg-white rounded-full shadow absolute -top-1 -left-1 flex justify-center items-center">
          <GameSymbol symbol={playerInfo.gameSymbol} />
        </div>
      </div>
      <div className="w-px h-9 bg-slate-200"></div>
      <div
        className={clsx(
          "font-semibold text-xl w-[60px]",
          seconds <= 10 && "text-orange-500",
          isTimer || "text-gray-300",
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
