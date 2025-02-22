import { useEffect, useState } from 'react'

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '836b394897894a459989f8487ca5009d';

export default function Search() {
  const [query, setQuery] = useState('pizza')

  // Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      
    }
    fetchFood()
  }, [query])
  return (
    <div>
      <h1>Search</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type='text'
      />
    </div>
  )
}
