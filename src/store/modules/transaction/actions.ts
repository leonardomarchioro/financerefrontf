import { ITrasaction } from "../../../interfaces";
import { SET_VALUE, CLEAN_VALUE } from "./actionsTypes";

export const setObjTransaction = (obj: ITrasaction) => ({
  type: SET_VALUE,
  state: obj,
});

export const cleanObjTransaction = () => ({
  type: CLEAN_VALUE,
});
