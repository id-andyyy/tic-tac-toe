import { Profile } from "@components/profile";
import { CrossIcon } from "@components/game/icons/CrossIcon";
import clsx from "clsx";

interface Props {
  className?: string;
}

export function GameInfo({ className }: Props) {
  return (
    <div
      className={clsx(
        "px-10 py-7 bg-white rounded-3xl shadow-md flex justify-between",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile userColor="text-bright" className="max-h-12">
            very_long_long_long_long_long_long_name
          </Profile>
          <div className="w-6 h-6 bg-white rounded-full shadow absolute -top-1 -left-1 flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>
        <div className="w-px h-9 bg-slate-200"></div>
        <div className="font-semibold text-xl">00:58</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="font-semibold text-xl text-orange-600">00:06</div>
        <div className="w-px h-9 bg-slate-200"></div>
        <div className="relative">
          <Profile userColor="text-bright" className="max-h-12">
            id_andyyy
          </Profile>
          <div className="w-6 h-6 bg-white rounded-full shadow absolute -top-1 -left-1 flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
