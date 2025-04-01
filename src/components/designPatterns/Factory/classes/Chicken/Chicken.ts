import { Pet } from '../../interfaces/FactoryInterfaces';

export class Chicken implements Pet {
  constructor(private name: string) {}

  public makeSound(): string {
    return 'Pio Pio!!!!';
  }

  public getName(): string {
    return this.name;
  }
}
