export const initialState = {
  searchValue: "",
  filteredData:[],
  usersData: [
    { 
      id: 0, 
      name: "Вася", 
      profile: "Маникюр",
      addressCity: "Zhelezonogorsk",
      gallery:["ava.jpg","ava.jpg","ava.jpg","ava.jpg","ava.jpg"],
      master:true
    },
    { id: 1, name: "Петя", profile: "Маникюр", master:true},
    { id: 2, name: "Женя", profile: "Маникюр", master:false},
    { id: 3, name: "Антон", profile: "Маникюр", master:true},
    { id: 4, name: "Валера", profile: "Маникюр", master:false},
    { id: 5, name: "Игорь", profile: "Маникюр", master:true},
    { id: 6, name: "Сергей", profile: "Маникюр", master:false},
    { id: 7, name: "Дима", profile: "Маникюр", master:true},
    { id: 8, name: "Владимир", profile: "Маникюр", master:true},
  ],

};
