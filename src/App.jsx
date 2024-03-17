import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Form from '../src/Components/From.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from '../Pages/Details.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Link to="/">
          <h1>Go Back </h1>
        </Link>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/" element={<Details />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
