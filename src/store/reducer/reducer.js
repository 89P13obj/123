import * as types from "../actions/actionType";
import {initialState} from './initialValue'


export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REPLACE: {
      return {
        searchValue: payload.searchValue,
        usersData: state.usersData,
      };
    }
    case types.MARK_FAVORITE: {
      return {
        ...state,
        usersData: state.usersData.map((data) => data.id === payload.id ? {...data, favorite: !data.favorite} : data),
    };
    }
    default:
      return state;
  }
}
