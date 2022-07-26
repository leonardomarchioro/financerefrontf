import { ITrasaction } from "../../../interfaces";
import { SET_VALUE, CLEAN_VALUE } from "./actionsTypes";

const transactionObjReducer = (
  state: {} | ITrasaction = {},
  action: { type: string; state?: ITrasaction }
) => {
  switch (action.type) {
    case SET_VALUE:
      state = action.state!;
      return state;

    case CLEAN_VALUE:
      state = {};
      return state;

    default:
      return state;
  }
};

export default transactionObjReducer;
