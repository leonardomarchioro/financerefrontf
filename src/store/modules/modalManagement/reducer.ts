import { ENTRANCE_MODAL, EXIT_MODAL, CLOSE } from "./actionsTypes";

const modalManagementTransactionReducer = (
  state: { type: string } = { type: "" },
  action: { type: string }
) => {
  switch (action.type) {
    case ENTRANCE_MODAL:
      state = { type: "entrance" };
      return state;

    case EXIT_MODAL:
      state = { type: "exit" };
      return state;

    case CLOSE:
      state = { type: "" };
      return state;

    default:
      state = { type: "" };
      return state;
  }
};

export default modalManagementTransactionReducer;
