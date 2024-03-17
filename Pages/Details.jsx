import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPet from '../fetchPet.jsx';

export default function Details() {
  const { id } = useParams();
  const results = useQuery(['details', id], fetchPet);

  if (results.isLoading) {
    return (
      <div>
        <h2>🫸🏾</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div>
      <h1>{pet.name}</h1>
      <h2>{pet.animal}</h2>
    </div>
  );
}
