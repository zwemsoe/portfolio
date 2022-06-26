export enum ActionTypes {
  SetPage = 'set_page',
}

export interface SetPageAction {
  type: ActionTypes.SetPage;
  payload: number;
}
