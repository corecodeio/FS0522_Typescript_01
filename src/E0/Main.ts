import { Runnable } from './Interfaces/Runnable';
import { Professor } from './Professor';
import { Person } from './Person';
import { Student } from './Student';
export class Main implements Runnable {
  start(): void {
    let school: Person[] = [];
    let p = new Professor('Alexa', 'Ipsum', 90000);
    school.push(p);
    //console.log(school);
    let p2 = new Student('Joshua', 'Lorem');
    school.push(p2);
    //console.log(school);
    for (let i = 0; i < school.length; i++) {
      console.log(school[i].toString());
      console.log(school[i].CLASS_ID);
    }
  }
}
