import {
  DefaultState,
  DefaultAction,
  DefaultActionTypes,
} from "../../types/default";

const initianalState: DefaultState = {
  loading: false,
  items: [],
  error: null,
};

export const frameReducer = (
  state = initianalState,
  action: DefaultAction
): DefaultState => {
  switch (action.type) {
    case DefaultActionTypes.FETCH_DEFAULT_LOADING:
      return {
        loading: true,
        error: null,
        items: state.items,
      };
    case DefaultActionTypes.FETCH_DEFAULT_SUCCESS:
      return {
        loading: false,
        error: null,
        items: [...state.items, ...action.payload],
      };
    case DefaultActionTypes.FETCH_DEFAULT_ERROR:
      return {
        loading: false,
        error: action.payload,
        items: [],
      };

    default:
      return state;
  }
};
