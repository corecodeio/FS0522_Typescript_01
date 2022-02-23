import { Box } from './Box';
import { Runnable } from './Interfaces/Runnable';

export class Main implements Runnable {
  start(): void {
    let stringBox = new Box<string>('Hola');
    let numberBox = new Box<number>(56);
    let booleanBox = new Box<boolean>(true);
    console.log(typeof stringBox.data);
    console.log(typeof numberBox.data);
    console.log(typeof booleanBox.data);
  }
}
