import { useDispatch } from "react-redux";
import { startNewGame } from "../../features/gameSlice";
import { getInitialPosition } from "../../functions/initial";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1 className="title">2048 GAME</h1>
      <button
        className="button-newgame"
        onClick={() => {
          dispatch(startNewGame(getInitialPosition()));
        }}
      >
        New Game
      </button>
    </header>
  );
};
