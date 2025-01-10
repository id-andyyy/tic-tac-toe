import { PLAYERS_ORDER } from "./constants";

export function getNextPlayer(
  currentPlayer: string,
  playersCount: number,
  playersTimeOver: string[],
) {
  const slicedPlayersOrder = PLAYERS_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );

  const nextPlayerIndex = slicedPlayersOrder.indexOf(currentPlayer) + 1;
  return slicedPlayersOrder[nextPlayerIndex] ?? slicedPlayersOrder[0];
}

export function getWinnerIndexes(
  cells: (string | null)[],
  searchLength: number,
  fieldSize: number,
): number[] | undefined {
  function compareElements(indexes: number[]): boolean {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return result;
  }

  function getSearchIndexes(index: number): number[][] {
    const result: number[][] = [[], [], [], []];

    for (let i = 0; i < searchLength; i++) {
      result[0].push(i - gap + index);
      result[1].push(fieldSize * (i - gap) + (i - gap) + index);
      result[2].push(-fieldSize * (i - gap) + (i - gap) + index);
      result[3].push(fieldSize * (i - gap) + index);
    }

    const x = index % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      result.shift();
      result.shift();
      result.shift();
    }
    return result;
  }

  const gap = Math.floor(searchLength / 2);

  for (let i = 0; i < cells.length; i++) {
    if (!cells[i]) continue;

    const indexRows = getSearchIndexes(i);

    const winnerIndexes = indexRows.find((row) => compareElements(row));

    if (winnerIndexes) return winnerIndexes;
  }

  return undefined;
}
