import React, { useEffect } from 'react'
import { RestaurantCard } from '../Restaurant/RestaurantCard'
import { useSelector } from 'react-redux';

export const Favorites = () => {
    const {auth}=useSelector(store=>store);

  useEffect(()=>{
    // dispatch()
  },[])
  return (
   <div>
    <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
     <div className='flex flex-wrap justify-center'>
      {auth.favorites?.map((item)=><RestaurantCard data={item}/>)}
    </div>
   </div>
  )
}
