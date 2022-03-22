export function getRandomPositions() {
  const position: number[] = [
    Math.floor(Math.random() * 4),
    Math.floor(Math.random() * 4),
  ];

  return position;
}

export function getInitialPosition(): number[][] {
  const position1: number[] = getRandomPositions();
  const position2: number[] = getRandomPositions();

  const createMatrix: number[][] = Array.from({ length: 4 }, () =>
    Array.from({ length: 4 }, () => 0)
  );

  const matrix: number[][] = [...createMatrix];

  if (position1[0] === position2[0] && position1[1] === position2[1]) {
    return getInitialPosition();
  } else {
    matrix[position1[0]][position1[1]] = rollInitialValue();
    matrix[position2[0]][position2[1]] = rollInitialValue();

    return matrix;
  }
}

export function rollInitialValue(): number {
  const randomNumber: number = Math.floor(Math.floor(Math.random() * 4) + 1);

  return randomNumber === 1 ? 4 : 2;
}
