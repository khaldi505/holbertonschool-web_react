// check this out later
// https://blog.logrocket.com/interfaces-in-typescript-what-are-they-and-how-do-we-use-them-befbc69b38b3/

export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number
}


export default function printTeacher(firstName: string, lastName: string) {return `${firstName[0]}.${lastName}`}

