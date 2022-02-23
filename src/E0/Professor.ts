import { Person } from './Person';

export class Professor extends Person {
  public CLASS_ID: string = 'PROFESSOR_CLASS';
  get income(): number {
    return this.salary;
  }

  set income(newSalary: number) {
    this.income = newSalary;
  }

  constructor(
    public name: string,
    public lastname: string,
    private salary: number
  ) {
    super(name, lastname);
  }

  getId(): string {
    return `P-${this.id}`;
  }

  toString(): string {
    return `
      ======================================
      ${this.name} ${this.lastname}
      salary: ${this.salary}
      id: ${this.getId()}
      ======================================
      `;
  }
}
