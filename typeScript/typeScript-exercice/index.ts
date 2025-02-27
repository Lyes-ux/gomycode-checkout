interface StudentI {
  id: number;
  name: string;
  age: number;
  grades: number[];
}

const students: StudentI[] = [{
    id: 1,
    name: "Lyes lizom",
    age: 18,
    grades: [14,20,13,16]
},
{
    id: 2,
    name: "Aymen",
    age: 19,
    grades: [12,14,16,13]
},
{
    id: 3,
    name: "Raouf",
    age: 23,
    grades: [12,15,17,19]
}
];

function printStudentDetails(student: StudentI){
    return 
    console.log(`${student.name} is ${student.age} jab : ${student.grades}`);
};

students.forEach(student=>{
    console.log(`${student.name} is ${student.age} jab : ${student.grades}`);
})