import { ParamsFactory, Pet } from '../../interfaces/FactoryInterfaces';
import { PetCreator } from '../PetCreator';
import { Cat } from './Cat';

export class CreatorCat extends PetCreator {
  public factoryMethod({ name }: ParamsFactory): Pet {
    return new Cat(name);
  }
}
