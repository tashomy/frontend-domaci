let students = [
 prvi = {
    id : 1,
    index : 25,
    name : 'Natasa',
    surname : 'Mijatovic',
    fax : 'PMF',
    smjer : 'Racunarske nauke',
    adress : 'ulica bb',
    old : 20,
    contact : '060-555-777',
    year: 2
  },
  drugi = {
    id : 2,
    index : 28,
    name : 'Aleksandar',
    surname : 'Draskovic',
    fax : 'Akademija',
    smjer : 'Grafika',
    adress : 'druga ulica bb',
    old : 23,
    contact : '060-444-888',
    year: 3
  },
  treci = {
    id : 3,
    index : 20,
    name : 'Teodora',
    surname : 'Draskovic',
    fax : 'Filoloski',
    smjer : 'Jezik',
    adress : 'treca ulica bb',
    old : 20,
    contact : '060-888-999',
    year: 2
  },
  cetvrti = {
    id : 4,
    index : 22,
    name : 'Svetlana',
    surname : 'Mijatovic',
    fax : 'Pravni',
    smjer : 'Pravo',
    adress : 'cetvrta ulica bb',
    old : 24,
    contact : '060-111-222',
    year: 3
  }
];

function sortByIndex(){
  let temp;
  for(let i=0; i<students.length; i++){
    for(let j=0; j<students.length; j++){
      if(students[i].index < students[j].index){
        temp = students[i];
        students[i] = students[j];
        students[j] = temp;
      }
    }
  }
  return students;
}

function filterByYear(year){
  let filtered = [];
  for(let i=0; i<students.length; i++){
    if(students[i].year === year){
      filtered.push(students[i]);
    }
  }
  return filtered;
}

function deleteOldest(){
  let max = 0;
  for(let i=0; i<students.length; i++){
    if(students[i].old > max){
      max = students[i].old;
    }
  }
  indexMax = students.findIndex(x => x.old === max);
  if(indexMax > -1){
    students.splice(indexMax, 1);
  }
  return students;
}

function addNewStudent(addId, addIndex, addName, addSurname, addFax, addSmjer, addAdress, addOld, addContact, addYear){
  students.push({
    id:addId,
    index:addIndex,
    name:addName,
    surname:addSurname,
    fax:addFax,
    smjer:addSmjer,
    adress:addAdress,
    old:addOld,
    contact:addContact,
    year:addYear
  });
  return students;
}

console.log(sortByIndex());
//console.log(addNewStudent(5,29,'Mirko', 'Mirkovic','Pomorski', 'Turizam', 'petaulica bb', 21, '060-333-111',4));