interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string;
    additionalProperties: { [prop: string]: any};
  };

  interface Directors extends Teacher {
    numberOfReports: number;
   };

let printTeacher = function (firstName: string, lastName: string) {
  console.log(`${firstName[0]}.${lastName}`)
}

printTeacher("John", "Doe")