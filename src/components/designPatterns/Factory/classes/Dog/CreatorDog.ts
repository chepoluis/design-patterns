import { ParamsFactory, Pet } from '../../interfaces/FactoryInterfaces';
import { Dog } from './Dog';
import { PetCreator } from '../PetCreator';

// extends -> herencia
export class CreatorDog extends PetCreator {
  // Al heredar de una clase abstracta, se implementa factoryMethod, pero
  // a su vez hereda makeSound() de PetCreator, lo que permite usar en el cliente
  // creator.makeSound() sin problema ya que la clase Dog tiene esa logica implementada
  public factoryMethod({ name }: ParamsFactory): Pet {
    return new Dog(name);
  }
}
