import React, { useEffect, useState } from 'react'

const Favorite = () => {

    const [data, setData] = useState([]);
  const [all, setAll] = useState([]);
  const [matchingItems, setMatchingItems] = useState([]);
  
  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favorites'));
    console.log("fav:", fav);
    setData(fav);

    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => {
        console.log("products", res);
        setAll(res.products);

        // Find matching items using the IDs in the 'fav' array
        const itemsInFavorites = res.products.filter((item) => fav.includes(item.id));

        setMatchingItems(itemsInFavorites); // Set the matching items in state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    console.log(matchingItems)
    
  return (
    <div>
      {matchingItems.length > 0 && matchingItems.map((e) => (
        <div key={e.id}>
          <strong>{e.title}</strong>
        </div>
      ))}
    </div>
  )
}

export default Favorite
