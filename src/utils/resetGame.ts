export const resetGame = (
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
  setGrid: React.Dispatch<React.SetStateAction<string[][]>>,
  setIsX: React.Dispatch<React.SetStateAction<boolean>>,
  setDraw: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setGameOver(false);
  setGrid([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  setIsX(true);
  setDraw(false);
};
