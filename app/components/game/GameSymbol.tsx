import { GAME_SYMBOLS } from "@components/game/constants";
import { CrossIcon } from "@components/game/icons/CrossIcon";
import { ZeroIcon } from "@components/game/icons/ZeroIcon";
import { TriangleIcon } from "@components/game/icons/TriangleIcon";
import { SquareIcon } from "@components/game/icons/SquareIcon";

interface Props {
  className?: string;
  symbol: string;
}

export function GameSymbol({ className, symbol }: Props) {
  const Icon = {
    [GAME_SYMBOLS.CROSS]: CrossIcon,
    [GAME_SYMBOLS.ZERO]: ZeroIcon,
    [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
    [GAME_SYMBOLS.SQUARE]: SquareIcon,
  }[symbol];

  return <Icon className={className} />;
}
