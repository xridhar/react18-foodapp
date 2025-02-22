import { useEffect } from 'react/ts5.0'
import { useState } from 'react/ts5.0'

export default function Search() {
  const [query, setQuery] = useState('')
  const URL = 'https://api.spoonacular.com/recipes/complexSearch'

  // Syntax of the useEffect hook
  useEffect(() => {
    function fetchFood() {}
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
