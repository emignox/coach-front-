// src/redux/reduxStore.ts

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appointmentsReducer from "./reducers/appointmentsReducer";

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
