import * as types from "./actionType"; 

export function replace(filteredData,searchValue) { 
  return {  
    type: types.REPLACE,
    payload: {
      filteredData,
      searchValue,
      
    }  
  };  
} 

export function replaceFav(usersData) { 
  
  return {  
    type: types.FAVORITE,
    payload: {
      usersData,
   
    }  
  };  
} 

export function favorites(usersData,id) {
  return function(dispatch) {
    usersData[id].favorite = usersData[id].favorite ? false : true;
    dispatch(replaceFav(usersData));    
    };
  };

export function reload(usersData,searchValue) {
  return function(dispatch) {
    var filteredData = [];
    var count = 0;
     for (let i = 0; i < usersData.length; i++) {
       if (searchValue !== undefined) {
         if (usersData[i].name.toUpperCase().indexOf(searchValue.toUpperCase()) >=0) 
           {
             filteredData[count] = usersData[i];
             count++;
           }
       }
     }
    dispatch(replace(filteredData,searchValue));
    };
  };

