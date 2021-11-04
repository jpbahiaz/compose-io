import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { storesReducer } from "./modules/store/slice";
import { usersReducer } from "./modules/user/slice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    stores: storesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = (
  dispatch: AppDispatch,
  getState: () => RootState,
) => void;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
