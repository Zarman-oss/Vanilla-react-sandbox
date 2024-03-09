import { useState } from 'react';

export default function From() {
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  placeholder="Enter Location"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </form>
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow">
            Submit
          </button>
          {location}
        </div>
      </div>
    </div>
  );
}
