import Pet from './Pet.jsx';

export default function Results({ pets }) {
  return (
    <div>
      {!pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.name}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city} ${pet.state}`}
          />
        ))
      )}
    </div>
  );
}
