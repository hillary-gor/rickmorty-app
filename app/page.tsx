import React from 'react'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

function Profile() {
  const { data, error, isLoading } = useSWR('https://rickandmortyapi.com/api/character', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
