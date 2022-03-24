import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isGameOverFunction, move } from "../functions/game";
import { getInitialPosition } from "../functions/initial";
import { RootState } from "../store";

interface IGameBoard {
  board: number[][];
  isGameOver: boolean;
  score: number;
}

const initialState = {
  board: getInitialPosition(),
  isGameOver: false,
  score: 0,
} as IGameBoard;

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startNewGame: (state, action: PayloadAction<number[][]>) => {
      state.board = action.payload;
      state.isGameOver = false;
      state.score = 0;
    },
    moveToLeft: (state) => {
      const moveFunction = move("left", state.board);
      state.board = moveFunction.newMatrix;
      state.score = state.score + moveFunction.score;
    },
    moveToRight: (state) => {
      const moveFunction = move("right", state.board);
      state.board = moveFunction.newMatrix;
      state.score = state.score + moveFunction.score;
    },
    moveToTop: (state) => {
      const moveFunction = move("top", state.board);
      state.board = moveFunction.newMatrix;
      state.score = state.score + moveFunction.score;
    },
    moveToBottom: (state) => {
      const moveFunction = move("bottom", state.board);
      state.board = moveFunction.newMatrix;
      state.score = state.score + moveFunction.score;
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
export const gameScore = (state: RootState) => state.game.score;

export default gameSlice.reducer;
