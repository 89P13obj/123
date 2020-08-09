import * as types from "./actionType"; 

export function replace(searchValue) { 
  return {  
    type: types.REPLACE,
    payload: {
      searchValue,
      
    }  
  };  
} 

export function markFavorites(id) {   
  return {  
    type: types.MARK_FAVORITE,
    payload: {
      id,   
    }  
  };  
} 



