export class Person{
  picture : string;
  lastname: string;
  firstname:string;
  sex:string;
  birthday:Date;

  constructor(public lname: string, public fname: string,
            public bday: Date, public sexPerson:string) {
  }
}
