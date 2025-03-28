import { ParamsFactory, Pet } from '../../interfaces/FactoryInterfaces';
import { PetCreator } from '../PetCreator';
import { Chicken } from './Chicken';

export class CreatorChicken extends PetCreator {
  public factoryMethod({ name }: ParamsFactory): Pet {
    return new Chicken(name);
  }
}
