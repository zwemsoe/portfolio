import { ActionTypes, SetPageAction } from './actions';

export interface IState {
  page: number;
}

export type TActions = SetPageAction;

export const initialState = {
  page: 0,
};

export const stateReducer = (state: IState, action: TActions): IState => {
  switch (action.type) {
    case ActionTypes.SetPage:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
