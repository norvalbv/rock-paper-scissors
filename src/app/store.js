import { configureStore } from "@reduxjs/toolkit";
import game from "../redux/game";

const store = configureStore({
  reducer: {
    game,
  },
});

export default store;
