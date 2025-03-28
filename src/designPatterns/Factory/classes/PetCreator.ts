import { ParamsFactory, Pet } from '../interfaces/FactoryInterfaces';

// Metodos de acceso
// Públicos: Accesibles desde cualquier parte.
// Protegidos: Accesibles dentro de la clase y sus subclases.
// Privados: Solo accesibles dentro de la misma clase.

// Los metodos static no requieren crear una instancia de la clase para llamarlos
export abstract class PetCreator {
  // abstract es la definicion del metodo
  // Abstract methods can only appear within an abstract class.
  // Su implementacion se hara en las clases derivadas
  public abstract factoryMethod({ name }: ParamsFactory): Pet;

  public makeSound({ name }: ParamsFactory): string {
    const pet = this.factoryMethod({ name });

    return `${pet.getName()} hace ${pet.makeSound()}`;
  }
}
