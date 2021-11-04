import axios, { AxiosResponse } from "axios";
import { GET_STORES_ACTIVABLE_SALES } from "../../../shared/urls";
import { AppThunk } from "../../store";
import { storesActivableSalesReceived } from "./slice";
import { StoresActivableSalesResponse } from "./types";

export function getStoresActivableSales(): AppThunk {
  return (dispatch) => {
    axios
      .get(GET_STORES_ACTIVABLE_SALES, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res: AxiosResponse<StoresActivableSalesResponse>) => {
        dispatch(storesActivableSalesReceived(res.data));
      });
  };
}
