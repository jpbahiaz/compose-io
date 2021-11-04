import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UsersCreatedAt,
  UsersShoppingListsResponse,
  UsersVouchersActivations,
} from "./types";

type VoucherActivations = {
  [index: string]: { dates: string[]; createdAt: string };
};

type UsersState = {
  loading: {
    neverUsedPoints: boolean;
    createdShoppingList: boolean;
    recurrenceAndTurn: boolean;
  };
  usedShoppingListCount: number | null;
  total: number | null;
  voucherActivations: VoucherActivations | null;
  voucherActivationsSynced: boolean;
  creationDates: UsersCreatedAt | null;
  count: number;
};

const initialState: UsersState = {
  loading: {
    neverUsedPoints: false,
    createdShoppingList: false,
    recurrenceAndTurn: false,
  },
  usedShoppingListCount: null,
  total: null,
  voucherActivations: null,
  voucherActivationsSynced: false,
  creationDates: null,
  count: 0
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => { state.count += 1 },
    usersShoppingListsReceived: (
      state,
      action: PayloadAction<UsersShoppingListsResponse>,
    ) => {
      state.usedShoppingListCount = action.payload.usedShoppingListCount;
      state.total = action.payload.totalUsers;
    },
    usersVouchersActivationsReceived: (
      state,
      action: PayloadAction<UsersVouchersActivations>,
    ) => {
      state.voucherActivations = action.payload.reduce((prev, curr) => {
        if (prev[curr.userId]) {
          prev[curr.userId].dates.push(curr.createdAt);
        } else {
          prev[curr.userId] = { dates: [curr.createdAt], createdAt: "" };
        }
        return prev;
      }, {} as VoucherActivations);
    },
    usersCreatedAtReceived: (state, action: PayloadAction<UsersCreatedAt>) => {
      state.creationDates = action.payload;
    },
    syncCreationDatesWithVoucherActivations: (state) => {
      if (state.creationDates && state.voucherActivations) {
        state.creationDates.forEach(({ id, createdAt }) => {
          if (state.voucherActivations[id]) {
            state.voucherActivations[id].createdAt = createdAt;
          }
        });
        state.voucherActivationsSynced = true;
      }
    },
  },
});

export const usersReducer = usersSlice.reducer;

export const {
  usersShoppingListsReceived,
  usersVouchersActivationsReceived,
  usersCreatedAtReceived,
  syncCreationDatesWithVoucherActivations,
  increment
} = usersSlice.actions;
