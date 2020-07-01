import * as types from "../actions/actionType";
import {initialState} from './initialValue'


export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REPLACE: {
      return {
        searchValue: payload.searchValue,
        filteredData: payload.filteredData,
        usersData: state.usersData,

      };
    }
    default:
      return state;
  }
}