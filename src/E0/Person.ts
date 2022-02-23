import { v4 as uuidv4 } from 'uuid';

export abstract class Person {
  abstract CLASS_ID: string;
  protected id: string;
  private fullName: string = '';

  constructor(public name: string, public lastname: string) {
    this.id = uuidv4();
  }

  abstract getId(): string;

  toString(): string {
    return `
      ======================================
      ${this.name} ${this.lastname}
      id: ${this.id}
      ======================================
      `;
  }
}
