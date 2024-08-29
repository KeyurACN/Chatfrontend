import axios from "axios";
import * as types from "./ActionTypes";

const token = JSON.parse(localStorage.getItem("usertoken"));


const GetAllBooksreq = () => {
  return {
    type: types.GETALLBOOKREQ,
  };
};

const GetAllBookssuccess = (payload) => {
  return {
    type: types.GETALLBOOKSUCESS,
    payload,
  };
};

const GetAllBooksfailure = () => {
  return {
    type: types.GETALLBOOKFAILURE,
  };
};

export const GetAllBooksData = (dispatch) => {
  dispatch(GetAllBooksreq());
  return axios
    .get(`https://glorious-tan-underclothes.cyclic.app/allbooks`)
    .then((r) => {
      return dispatch(GetAllBookssuccess(r.data));
    })
    .catch((err) => {
      dispatch(GetAllBooksfailure());
    });
};
