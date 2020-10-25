let students = [];

export default class Student{
  constructor(id,index,name,surname,fax,smjer,adress,old,contact,year){
    this.id = id;
    this.index =index;
    this.name = name;
    this.surname = surname
    this.fax = fax;
    this.smjer = smjer;
    this.adress = adress;
    this.old = old;
    this.contact = contact;
    this.year = year;
  }
}

export function get(id){
  for(let i=0; i<students.length; i++){
    if(id === students[i].id){
      return students[i];
    }
  }
}

export function update(id,indexU,nameU,surnameU,faxU,smjerU,adressU,oldU,contactU,yearU){
  let idUpdate;

  idUpdate = students.findIndex(x => x.id === id);
  if(idUpdate > -1){
    students[idUpdate].index = indexU;
    students[idUpdate].name = nameU;
    students[idUpdate].surname = surnameU;
    students[idUpdate].fax = faxU;
    students[idUpdate].smjer = smjerU;
    students[idUpdate].adress = adressU;
    students[idUpdate].old = oldU;
    students[idUpdate].contact = contactU;
    students[idUpdate].year = yearU;
  }
  return students;

}

export function deletation(id){
  let idDelete;
  
  idDelete = students.findIndex(x => x.id === id);
  if(idDelete > -1){
    students.splice(idDelete,1);
  }
  return students;
  
}

export function create(id,index,name,surname,fax,smjer,adress,old,contact,year) {
  let s = new Student(id,index,name,surname,fax,smjer,adress,old,contact,year);
  students.push(s);
}

export function list(){
  return students;
}