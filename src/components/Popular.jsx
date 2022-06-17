import { useEffect, useState } from "react";


function Popular() {

  const [cuisine, setCuisine] = useState([])

  useEffect(() => {
    getPopular();
  }, [])

  console.log(cuisine)

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=korean`);
    const data = await api.json();
    setCuisine(data.results);
  };

  return (
    <div>Popular</div>
  )
}

export default Popular
