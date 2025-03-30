import { Type } from "./ActionType";

export const initialstate = {
  basket: [], // 🔹 Ensure basket starts as an empty array
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item], // ✅ Properly adds items
      };

    default:
      return state;
  }
};
