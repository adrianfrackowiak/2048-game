import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isGameOverFunction, move } from "../functions/game";
import { getInitialPosition } from "../functions/initial";
import { RootState } from "../store";

interface IGameBoard {
  board: number[][];
  isGameOver: boolean;
}

const initialState = {
  board: getInitialPosition(),
  isGameOver: false,
} as IGameBoard;

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startNewGame: (state, action: PayloadAction<number[][]>) => {
      state.board = action.payload;
      state.isGameOver = false;
    },
    moveToLeft: (state) => {
      state.board = move("left", state.board).newMatrix;
    },
    moveToRight: (state) => {
      state.board = move("right", state.board).newMatrix;
    },
    moveToTop: (state) => {
      state.board = move("top", state.board).newMatrix;
    },
    moveToBottom: (state) => {
      state.board = move("bottom", state.board).newMatrix;
    },
    checkIsGameOver: (state) => {
      state.isGameOver = isGameOverFunction(state.board);
    },
  },
});

export const {
  startNewGame,
  moveToLeft,
  moveToRight,
  moveToTop,
  moveToBottom,
  checkIsGameOver,
} = gameSlice.actions;

export const gameBoard = (state: RootState) => state.game.board;
export const gameOver = (state: RootState) => state.game.isGameOver;

export default gameSlice.reducer;
