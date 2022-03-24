import { getRandomPositions, rollInitialValue } from "./initial";

export function move(direction: string, board: number[][]) {
  const matrix: number[][] = [...board];
  let newMatrix: number[][] = [];
  let isMovePossible: boolean = true;
  let score: number = 0;

  const rotateMatrix: number[][] =
    direction === "top" || direction === "bottom"
      ? matrix[0].map((val, index) => matrix.map((row) => row[index]))
      : matrix;

  rotateMatrix.map((row) => {
    const merge = mergeFields(row);
    score = score + merge.score;

    const emptyFields: number = 4 - merge.movedRow.length;

    for (let i = 0; i < emptyFields; i++) {
      if (direction === "top" || direction === "left") merge.movedRow.push(0);
      if (direction === "bottom" || direction === "right")
        merge.movedRow.unshift(0);
    }

    newMatrix.push(merge.movedRow);
  });

  if (direction === "top" || direction === "bottom")
    newMatrix = newMatrix[0].map((val, index) =>
      newMatrix.map((row) => row[index])
    );

  const findZeros: number[] = newMatrix.flat().filter((row) => row);

  if (findZeros.length !== 16) {
    addNewRandomField(newMatrix);
  } else {
    isMovePossible = false;
  }

  return { newMatrix, isMovePossible, score };
}

function addNewRandomField(board: number[][]) {
  const matrix: number[][] = [...board];
  const position: number[] = getRandomPositions();

  if (matrix[position[0]][position[1]] === 0) {
    matrix[position[0]][position[1]] = rollInitialValue();
    return matrix;
  } else {
    addNewRandomField(matrix);
  }
}

export function mergeFields(row: number[]) {
  const movedRow: number[] = row.flat().filter((row) => row);
  let score: number = 0;

  movedRow.map((field, index) => {
    if (field === movedRow[index + 1]) {
      movedRow[index] = field * 2;
      score = score + field * 2;
      movedRow.splice(index + 1, 1);
    }
  });

  return { movedRow, score };
}

export function isGameOverFunction(board: number[][]) {
  if (
    !move("top", board).isMovePossible &&
    !move("bottom", board).isMovePossible &&
    !move("left", board).isMovePossible &&
    !move("right", board).isMovePossible
  ) {
    return true;
  } else {
    return false;
  }
}
