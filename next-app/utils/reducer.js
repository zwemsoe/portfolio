import { SET_PAGE } from "./actions";

export const initialState = {
  page: 0,
};

export const stateReducer = (state, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
};
