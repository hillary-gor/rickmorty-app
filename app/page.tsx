// pages/index.tsx
import React from 'react';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default function Home() {
  const { data, error } = useSWR('https://rickandmortyapi.com/api/character', fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return <h1>{data.name}</h1>;
}
