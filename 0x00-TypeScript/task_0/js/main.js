var student1 = { firstName: "elhaj", LastName: "9asem", age: 69, location: "bo3rada" };
var student2 = { firstName: "el haj moussa", LastName: "moussa el haj", age: 7, location: "ghardimo" };
var studentList = [student1, student2];
var table = document.createElement("table");
table.insertRow(0).innerHTML = "<td>" + student1.firstName + "</td><td>" + student1.location + "</td>";
table.insertRow(1).innerHTML = "<td>" + student2.firstName + "</td><td>" + student2.location + "</td>";
document.body.append(table);
