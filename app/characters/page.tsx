// projectroot/characters/page.tsx
import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ExampleComponent() {
  const { data, isLoading, mutate } = useSWR(
    'https://rickandmortyapi.com/api/character',
    fetcher,
    {
      // Put your SWR options here as needed
    }
  );

  return (
    <div>
      <h2>Example Component</h2>
      {isLoading ? <p>Loading...</p> : <p>{data?.results[0]?.name}</p>}
    </div>
  );
}
