import * as types from "./ActionTypes";

const initailState = {
  isLoading: false,
  isError: false,
  ChatData:[]
};

export const Reducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETDATAREQ:
      return {
        ...state,
        isLoading: true,
      };

    case types.GETDATASUCESS:
      return {
        ...state,
        isLoading: false,
      ChatData: payload,
      };

    case types.GETDATAFAILURE:
      return {
        ...state,
        isLoading: true,
        ChatData: [],
      };

     

    default:
      return state;
  }
};
