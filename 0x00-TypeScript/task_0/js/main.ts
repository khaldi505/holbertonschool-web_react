interface Student {
    firstName: string,
    LastName: string,
    age: number
    location: string;
}

const student1: Student = {firstName: "elhaj", LastName: "9asem", age: 69, location: "bo3rada"};
const student2: Student = {firstName: "el haj moussa", LastName: "moussa el haj", age: 7, location: "ghardimo"};
const studentList: Array<Student> = [student1, student2];

const table = document.createElement("table")
table.insertRow(0).innerHTML = `<td>${student1.firstName}</td><td>${student1.location}</td>`
table.insertRow(1).innerHTML = `<td>${student2.firstName}</td><td>${student2.location}</td>`
document.body.append(table)
