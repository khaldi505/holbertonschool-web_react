interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string;
    additionalProperties: { [prop: string]: any};
  };

  interface Directors extends Teacher {
    test: String;
    numberOfReports: number;
   };
