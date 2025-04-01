import { Pet } from '../../interfaces/FactoryInterfaces';

// implements -> para el uso de una interfaz
export class Dog implements Pet {
  constructor(private name: string) {}

  public makeSound(): string {
    return 'Guau!!!';
  }

  public getName(): string {
    return this.name;
  }
}
