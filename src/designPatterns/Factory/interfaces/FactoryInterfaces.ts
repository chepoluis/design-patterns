export interface ParamsFactory {
  name: string;
}

// All the clases must have this interface
export interface Pet {
  makeSound(): string;
  getName(): string;
}
