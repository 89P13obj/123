export default function(usersData,searchValue) {
  return function(usersData,searchValue){
      let filteredData = [];
      let count = 0;
       for (let i = 0; i < usersData.length; i++) {
         if (searchValue !== undefined) {
           if (usersData[i].name.toUpperCase().indexOf(searchValue.toUpperCase()) >=0) 
             {
              filteredData[count] = usersData[i];
               count++;
             }
         }
       }
       return filteredData;
     }};
