import { ENTRANCE_MODAL, EXIT_MODAL, CLOSE } from "./actionsTypes";

export const entranceModal = () => ({
  type: ENTRANCE_MODAL,
});

export const exitModal = () => ({
  type: EXIT_MODAL,
});

export const closeModal = () => ({ type: CLOSE });
