import{Person} from '../models/Person.model';

export class Teacher extends Person{

  constructor(public lastname: string, public firstname: string,
            public birthday: Date, public sex:string) {
              super(lastname,firstname,birthday,sex);
            }
}
