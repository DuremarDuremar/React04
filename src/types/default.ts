export interface DefaultState {
  items: any[];
  loading: boolean;
  error: null | string;
}

export enum DefaultActionTypes {
  FETCH_DEFAULT_LOADING = "FETCH_DEFAULT_LOADING",
  FETCH_DEFAULT_SUCCESS = "FETCH_DEFAULT_SUCCESS",
  FETCH_DEFAULT_ERROR = "FETCH_DEFAULT_ERROR",
}

interface FetchDefaultLoadingAction {
  type: DefaultActionTypes.FETCH_DEFAULT_LOADING;
}
interface FetchDefaultSuccessAction {
  type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS;
  payload: any[];
}
interface FetchDefaultErrorAction {
  type: DefaultActionTypes.FETCH_DEFAULT_ERROR;
  payload: string;
}

export type DefaultAction =
  | FetchDefaultLoadingAction
  | FetchDefaultSuccessAction
  | FetchDefaultErrorAction;
