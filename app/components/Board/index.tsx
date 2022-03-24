import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkIsGameOver,
  gameBoard,
  gameOver,
  gameScore,
  moveToBottom,
  moveToLeft,
  moveToRight,
  moveToTop,
} from "../../features/gameSlice";

export const Board = () => {
  const board = useSelector(gameBoard);
  const isGameOver = useSelector(gameOver);
  const score = useSelector(gameScore);

  const dispatch = useDispatch();

  const handleKeypress = useCallback(
    (e) => {
      if (e.keyCode === 37) {
        dispatch(moveToLeft());
      } else if (e.keyCode === 39) {
        dispatch(moveToRight());
      } else if (e.keyCode === 38) {
        dispatch(moveToTop());
      } else if (e.keyCode === 40) {
        dispatch(moveToBottom());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(checkIsGameOver());
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);
    return () => document.removeEventListener("keydown", handleKeypress);
  }, [handleKeypress]);

  return (
    <div className="board">
      {isGameOver && (
        <div className="game-over">
          <h3>Game Over</h3> <p>Your score: {score}</p>
        </div>
      )}
      {board.map((row: number[]) => {
        return row.map((field: number, index: number) => {
          return (
            <div key={index} className={`grid-box`}>
              <div className={`tile tile-${field}`}>{field !== 0 && field}</div>
            </div>
          );
        });
      })}
    </div>
  );
};
