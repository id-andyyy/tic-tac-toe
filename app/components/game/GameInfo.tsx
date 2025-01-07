import { Profile } from "@components/profile";
import clsx from "clsx";
import { GameSymbol } from "@components/game/GameSymbol";
import { GAME_SYMBOLS } from "./constants";
import { StaticImageData } from "next/image";
import { SYMBOL_COLORS } from "../profile/constants";

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
  playersCount: number;
}

export function GameInfo({ className, playersCount }: Props) {
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
          playerInfo={player}
        />
      ))}
    </div>
  );
}

interface PlayerInfoProps {
  isRight: boolean;
  playerInfo: {
    avatarSrc?: StaticImageData;
    gameSymbol: string;
    rating: number;
    username: string;
  };
}

function PlayerInfo({ isRight, playerInfo }: PlayerInfoProps) {
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
      <div className="font-semibold text-xl">00:58</div>
    </div>
  );
}
