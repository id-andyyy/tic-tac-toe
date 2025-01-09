import { PLAYERS_ORDER } from "./constants";

export function getNextPlayer(currentPlayer: string, playersCount: number) {
  const nextPlayerIndex = PLAYERS_ORDER.indexOf(currentPlayer) + 1;
  return (
    PLAYERS_ORDER.slice(0, playersCount)[nextPlayerIndex] ?? PLAYERS_ORDER[0]
  );
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
      result[0].push(i - halfSearchLength + index);
      result[1].push(
        fieldSize * (i - halfSearchLength) + (i - halfSearchLength) + index,
      );
      result[2].push(
        -fieldSize * (i - halfSearchLength) + (i - halfSearchLength) + index,
      );
      result[3].push(fieldSize * (i - halfSearchLength) + index);
    }

    return result;
  }

  const halfSearchLength = Math.floor(searchLength / 2);

  for (let i = 0; i < cells.length; i++) {
    if (!cells[i]) continue;

    const indexRows = getSearchIndexes(i);

    const winnerIndexes = indexRows.find((row) => compareElements(row));

    if (winnerIndexes) return winnerIndexes;
  }

  return undefined;
}
