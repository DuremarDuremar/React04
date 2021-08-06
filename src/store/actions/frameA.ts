import { Dispatch } from "redux";
import axios from "axios";

import { DefaultActionTypes, DefaultAction } from "../../types/default";

export const fetchTop = (n: number) => {
  return async (dispatch: Dispatch<DefaultAction>) => {
    try {
      dispatch({ type: DefaultActionTypes.FETCH_DEFAULT_LOADING });

      const res = axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/888`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "3624a818-0f9b-4117-91dd-3f6624d9d171",
          },
        }
      );

      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_SUCCESS,
        payload: await res.then((res) => res.data.frames),
      });
    } catch (e) {
      dispatch({
        type: DefaultActionTypes.FETCH_DEFAULT_ERROR,
        payload: "ошибка",
      });
    }
  };
};
