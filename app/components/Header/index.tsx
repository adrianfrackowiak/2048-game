import { useDispatch, useSelector } from "react-redux";
import { gameScore, startNewGame } from "../../features/gameSlice";
import { getInitialPosition } from "../../functions/initial";

export const Header = () => {
  const score = useSelector(gameScore);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1 className="title">2048 GAME</h1>
      <div className="panel">
        <button
          className="button-newgame"
          onClick={() => {
            dispatch(startNewGame(getInitialPosition()));
          }}
        >
          New Game
        </button>
        <h3 className="score">{score}</h3>
      </div>
    </header>
  );
};
