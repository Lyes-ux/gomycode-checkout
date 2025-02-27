var students = [{
        id: 1,
        name: "Lyes lizom",
        age: 18,
        grades: [14, 20, 13, 16]
    },
    {
        id: 2,
        name: "Aymen",
        age: 19,
        grades: [12, 14, 16, 13]
    },
    {
        id: 3,
        name: "Raouf",
        age: 23,
        grades: [12, 15, 17, 19]
    }
];
function printStudentDetails(student) {
    return;
    console.log("".concat(student.name, " is ").concat(student.age, " jab : ").concat(student.grades));
}
;
students.forEach(function (student) {
    console.log("".concat(student.name, " is ").concat(student.age, " jab : ").concat(student.grades));
});
