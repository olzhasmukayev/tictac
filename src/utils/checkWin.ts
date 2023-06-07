export const checkWin = (grid: string[][]): boolean => {
  for (let r = 0; r < 3; r++) {
    if (
      grid[r][0].length &&
      grid[r][1].length &&
      grid[r][2].length &&
      grid[r][0] == grid[r][1] &&
      grid[r][1] == grid[r][2]
    )
      return true;
    if (
      grid[0][r].length &&
      grid[1][r].length &&
      grid[2][r].length &&
      grid[0][r] == grid[1][r] &&
      grid[1][r] == grid[2][r]
    )
      return true;
  }

  if (
    grid[0][0].length &&
    grid[1][1].length &&
    grid[2][2].length &&
    grid[0][0] == grid[1][1] &&
    grid[1][1] == grid[2][2]
  )
    return true;
  if (
    grid[0][2].length &&
    grid[1][1].length &&
    grid[2][0].length &&
    grid[0][2] == grid[1][1] &&
    grid[1][1] == grid[2][0]
  )
    return true;

  return false;
};
