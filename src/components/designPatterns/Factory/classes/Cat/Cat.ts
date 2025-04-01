import { Pet } from '../../interfaces/FactoryInterfaces';

export class Cat implements Pet {
  constructor(private name: string) {}

  public makeSound(): string {
    return 'Miauuuu!!!';
  }

  public getName(): string {
    return this.name;
  }
}
