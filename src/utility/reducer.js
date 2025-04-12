import { Type } from "./ActionType";

export const initialstate = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const itemExists = state.basket.some(
        (item) => item.id === action.item.id
      );

      return {
        ...state,
        basket: itemExists
          ? state.basket.map((item) =>
              item.id === action.item.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.basket, { ...action.item, quantity: 1 }],
      };
    }

    case Type.INCREMENT_QUANTITY: {
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case Type.DECREMENT_QUANTITY: {
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // Remove item if quantity becomes 0
      };
    }

    case Type.REMOVE_FROM_BASKET: {
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    }

    case Type.CLEAR_BASKET: {
      return { ...state, basket: [] };
    }
    case Type.SET_USER: {
      return { ...state, user: action.user };
    }
    default:
      return state;
  }
};
export default reducer;
