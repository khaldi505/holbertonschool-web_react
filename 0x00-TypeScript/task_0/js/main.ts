interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string;
}

const student1 : Student = {firstName: "Jason", lastName: "Todd", age: 24, location: "GT"};
const student2: Student = {firstName: "Dick", lastName: "Grayson", age: 22, location: "GT"};

let studentsList: Array<Student> = [student1, student2]
const table = document.createElement("table");
const tr = document.createElement("tr")
table.appendChild(tr)
const trtwo = document.createElement("tr")
table.appendChild(trtwo)
tr.innerHTML = `<td>${student1.firstName} ${student1.location}</td>`;
trtwo.innerHTML = `<td>${student2.firstName} ${student2.location}</td>`;

document.body.append(table)