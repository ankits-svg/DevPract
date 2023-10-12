import React, { useEffect, useState } from 'react'
import './style.css'

const Product = () => {
    const [data,setData]=useState([])
    const [load,setLoad]=useState(true)
    const [error,setError]=useState(false)
    
    const [pick,setPick]=useState([])
    const [fav, setFav] = useState(true);
   

    useEffect(()=>{
        fetch('https://dummyjson.com/products').then(res=>res.json()).then(res=>{
            console.log("products",res)
            setData(res.products)
            setLoad(false)
        }).catch(err=>{
            // console.log(err)
            setLoad(false)
            setError(true)
        })
    },[])

    if(error){
        return <p>Error:{error.message}</p>
    }

    const handleCheckbox = (id) => {
      if (pick.includes(id)) {
        setPick(pick.filter((e) => e !== id));
      } else {
        setPick([...pick, id]);
      }
    };

  
    const handleFav = (itemId) => {
      if (localStorage.getItem('favorites')) {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites.includes(itemId)) {
          const updatedFavorites = favorites.filter((id) => id !== itemId);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
          
        } else {
          const updatedFavorites = [...favorites, itemId];
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
          
        }
      } else {
        localStorage.setItem('favorites', JSON.stringify([itemId]));
       
      }
    };
    
    

    const handleDelete=()=>{
      const updatedData = data.filter((el) => !pick.includes(el.id));
      setData(updatedData);
      setPick([]);
    }

  return (
    <div >
          <div>
          <button className="favorite-button" onClick={()=>handleDelete()}>Delete</button>
          
          </div>
        {load===true ? <p>...Loading</p> : <>
        {data.length>0 && data.map(e=>{
        return  <div key={e.id}>
          <input type="checkbox" checked={pick.includes(e.id)} onChange={()=>handleCheckbox(e.id)}/>
          <span className={pick.includes(e.id) ? 'selected' : " "}>{e.title}</span>
          {fav===true ? <button className="favorite-button" onClick={() => handleFav(e.id)}>Like</button> : <button className="favorite-button" onClick={() => handleFav(e.id)}>DisLike</button>}
        </div>
      })}
        </>}
        
    </div>
  )
}

export default Product
