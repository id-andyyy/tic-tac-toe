import { CrossIcon } from "@components/game/icons/CrossIcon";
import { ZeroIcon } from "@components/game/icons/ZeroIcon";
import { UiButton } from "@components/uikit";

const cells = new Array(12 * 12).fill(null);

export function GameField() {
  return (
    <div className="p-7 bg-white rounded-3xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold">
          <div className="text-xl flex items-center">
            Ход: <CrossIcon />
          </div>
          <div className="text-xs text-inactive flex items-center gap-1">
            Следующий: <ZeroIcon className="w-3 h-3" />
          </div>
        </div>
        <UiButton className="" size="md" type="inactive">
          Сдаться
        </UiButton>
      </div>
      <div className="grid grid-cols-[repeat(12,_60px)] grid-rows-[repeat(12,_60px)] pt-px pl-px mx-auto">
        {cells.map((_, index) => (
          <button
            key={index}
            className="border border-gray-400 -mt-px -ml-px flex items-center justify-center"
          >
            {/* <ZeroIcon className="w-9 h-9" /> */}
          </button>
        ))}
      </div>
    </div>
  );
}
