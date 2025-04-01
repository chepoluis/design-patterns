export interface Pattern {
  id: string;
  name: string;
  category: 'Creational' | 'Structural' | 'Behavioral';
  shortDescription: string;
  description: string;
  implemented: boolean;
}

export const patterns: Pattern[] = [
  {
    id: 'factory',
    name: 'Factory Method',
    category: 'Creational',
    shortDescription: 'Creates objects without specifying the exact class',
    description:
      'Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.',
    implemented: true,
  },
  {
    id: 'singleton',
    name: 'Singleton',
    category: 'Creational',
    shortDescription: 'Ensures a class has only one instance',
    description:
      'Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.',
    implemented: false,
  },
  {
    id: 'observer',
    name: 'Observer',
    category: 'Behavioral',
    shortDescription: 'Defines a subscription mechanism',
    description:
      "Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.",
    implemented: false,
  },
  {
    id: 'adapter',
    name: 'Adapter',
    category: 'Structural',
    shortDescription: 'Allows incompatible interfaces to work together',
    description:
      'Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.',
    implemented: false,
  },
  {
    id: 'strategy',
    name: 'Strategy',
    category: 'Behavioral',
    shortDescription: 'Defines a family of algorithms',
    description:
      'Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.',
    implemented: false,
  },
  {
    id: 'decorator',
    name: 'Decorator',
    category: 'Structural',
    shortDescription: 'Adds new behaviors to objects dynamically',
    description:
      'Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.',
    implemented: false,
  },
];
