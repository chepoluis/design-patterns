import { useState } from 'react';
import { PetCreator } from './classes/PetCreator';
import { CreatorDog } from './classes/Dog/CreatorDog';
import { CreatorCat } from './classes/Cat/CreatorCat';
import { CreatorChicken } from './classes/Chicken/CreatorChicken';

const Factory = () => {
  const [sound, setSound] = useState<string>('');

  function clientCode(creator: PetCreator, name: string) {
    console.log(
      "Client: I'm not aware of the creator's class, but it still works."
    );
    console.log(creator.makeSound({ name }));

    return creator.makeSound({ name });
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div>
        <button
          onClick={() => setSound(clientCode(new CreatorDog(), 'Perrito'))}
        >
          Dog
        </button>{' '}
        <button
          onClick={() => setSound(clientCode(new CreatorCat(), 'Gatito'))}
        >
          Cat
        </button>
        <button
          onClick={() => setSound(clientCode(new CreatorChicken(), 'Pollito'))}
        >
          Chicken
        </button>
      </div>

      <span>{sound} </span>
    </div>
  );
};

export default Factory;
