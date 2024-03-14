import { useEffect, useState } from 'react';
import useBreedList from '../Components/useBreedList.jsx';
import Results from './Results.jsx';

export default function Form() {
  const ANIMALS = ['bird', 'cat', 'dog', 'reptile'];

  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const data = await res.json();

    setPets(data.pets);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              requestPets();
            }}
          >
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  placeholder="Enter Location"
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="animal"
                className="block text-sm font-medium text-gray-700"
              >
                Animals
              </label>
              <div className="mt-1">
                <select
                  id="animal"
                  value={animal}
                  onChange={(e) => {
                    setAnimal(e.target.value);
                    setBreed('');
                  }}
                >
                  {ANIMALS.map((animal) => (
                    <option key={animal}>{animal}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="breed"
                className="block text-sm font-medium text-gray-700"
              >
                Breed
              </label>
              <div className="mt-1">
                <select
                  id="breed"
                  disabled={breeds.length === 0}
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                >
                  {breeds.map((breed) => (
                    <option key={breed}>{breed}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow"
            >
              Submit
            </button>
          </form>

          <Results pets={pets} />
        </div>
      </div>
    </div>
  );
}
