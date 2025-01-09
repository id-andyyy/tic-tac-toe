import Link from "next/link";
import { ArrowLeftIcon } from "@components/game/icons/ArrowLeftIcon";
import { StarIcon } from "@components/game/icons/StarIcon";
import { ProfileIcon } from "@components/game/icons/ProfileIcon";
import { TimerIcon } from "@components/game/icons/TimerIcon";
import clsx from "clsx";

interface Props {
  className?: string;
  playersCount: number;
}

export function GameTitle({ className, playersCount }: Props) {
  return (
    <div className={clsx(className, "")}>
      <Link
        href="#"
        className="text-modern flex items-center gap-3 text-sm font-medium mb-2 group"
      >
        <span className="group-hover:opacity-0 group-hover:-translate-x-9 transition-all">
          <ArrowLeftIcon />
        </span>
        <span className="translate-x-0 group-hover:-translate-x-9 transition-all">
          На главную
        </span>
      </Link>
      <h1 className="font-semibold text-4xl mb-3">Игра #72345</h1>
      <div className="flex items-center gap-3 text-inactive font-medium text-sm">
        <button className="hover:text-black transition-colors">
          <StarIcon />
        </button>
        <button className="flex gap-1 items-center hover:text-black transition-colors">
          <ProfileIcon /> {playersCount}
        </button>
        <button className="flex gap-1 items-center hover:text-black transition-colors">
          <TimerIcon /> 1 мин на игрока
        </button>
      </div>
    </div>
  );
}
