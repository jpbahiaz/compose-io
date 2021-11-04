import axios, { AxiosResponse } from "axios";
import {
  GET_USERS_CREATED_AT,
  GET_USERS_SHOPPING_LISTS,
  GET_USERS_VOUCHER_ACTIVATIONS,
} from "../../../shared/urls";
import { AppThunk } from "../../store";
import {
  usersCreatedAtReceived,
  usersShoppingListsReceived,
  usersVouchersActivationsReceived,
} from "./slice";
import {
  UsersCreatedAt,
  UsersShoppingListsResponse,
  UsersVouchersActivations,
} from "./types";

export function getUsersShoppingListsData(): AppThunk {
  return (dispatch) => {
    axios
      .get(GET_USERS_SHOPPING_LISTS, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res: AxiosResponse<UsersShoppingListsResponse>) => {
        dispatch(usersShoppingListsReceived(res.data));
      });
  };
}

export function getUsersVochersActivations(): AppThunk {
  return (dispatch) => {
    axios
      .get(GET_USERS_VOUCHER_ACTIVATIONS, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res: AxiosResponse<UsersVouchersActivations>) => {
        dispatch(usersVouchersActivationsReceived(res.data));
      });
  };
}

export function getUsersCreatedAt(): AppThunk {
  return (dispatch) => {
    axios
      .get(GET_USERS_CREATED_AT, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res: AxiosResponse<UsersCreatedAt>) => {
        dispatch(usersCreatedAtReceived(res.data));
      });
  };
}
