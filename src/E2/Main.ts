import { Runnable } from './Interfaces/Runnable';
import { LinkedList } from './LinkedList';

export class Main implements Runnable {
  start(): void {
    // FIFO (FIRST IN, FIRST OUT)
    // GARBAGE COLLECTOR
    let list = new LinkedList<number>();
    list.add(40);
    list.add(60);
    list.add(100);
    list.add(900000);
    console.log(list.toString());
    console.log(list.size);
    list.remove();
    console.log(list.toString());
    console.log(list.size);
  }
}
