import { Person } from './Person';

export class Student extends Person {
  public CLASS_ID: string = 'STUDENT_CLASS';
  public classes: string[] = [];
  getId(): string {
    return `S-${this.id}`;
  }
}
