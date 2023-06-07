import { useEffect, useState } from "react";
import { checkWin } from "../../utils/checkWin";
import { resetGame } from "../../utils/resetGame";
import Tile from "./Tile/Tile";

const Grid: React.FC = () => {
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isX, setIsX] = useState<boolean>(true);
  const [draw, setDraw] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    const newGrid = localStorage.getItem("tic-tac");
    if (newGrid) setGrid(JSON.parse(newGrid));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let idx = Number((e.target as HTMLTextAreaElement).id);
    let row = Math.floor(idx / 3),
      col = idx % 3;
    let newGrid = [...grid];
    if (newGrid[row][col].length) return;
    newGrid[row][col] = isX ? "X" : "O";
    setGrid(newGrid);
    setIsX((isX) => !isX);
    setGameOver(checkWin(grid));
    let filled = 0;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (grid[r][c] == "X" || grid[r][c] == "O") filled++;
      }
    }
    if (filled == 9 && !gameOver) {
      setGameOver(true);
      setDraw(true);
    }
    localStorage.setItem("tic-tac", JSON.stringify(grid));
  };

  if (gameOver) {
    console.log(true);
    return (
      <div className="flex flex-col gap-y-4">
        <p className="text-2xl font-bold">
          {draw ? "DRAW" : `GAME OVER, WINNER IS ${isX ? "O" : "X"}`}
        </p>
        <button
          className="border shadow-sm sm:text-lg md:text-lg lg:text-xl font-medium bg-slate-200 py-3"
          onClick={() => {
            resetGame(setGameOver, setGrid, setIsX, setDraw);
          }}
        >
          RESTART
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col">
        {grid.map((row, r) => (
          <div className="flex flex-row">
            {row.map((col, c) => {
              return (
                <Tile id={r * 3 + c} key={r * 3 + c} onClick={handleClick}>
                  {col}
                </Tile>
              );
            })}
          </div>
        ))}
      </div>
      <button
        className="border shadow-sm sm:text-lg md:text-lg lg:text-xl font-medium bg-slate-200 py-3 w-full"
        onClick={() => {
          resetGame(setGameOver, setGrid, setIsX, setDraw);
        }}
      >
        RESTART
      </button>
    </div>
  );
};

export default Grid;
