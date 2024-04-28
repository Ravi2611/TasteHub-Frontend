import React, { useEffect } from 'react'
import "./Home.css"
import { MultiItemCarousal } from './MultiItemCarousal'
import { RestaurantCard } from '../Restaurant/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurantsAction } from '../State/Restaurant/Action'
import { useNavigate } from 'react-router-dom'
import { findCart } from '../State/Cart/Action'

const restaurant = [1,1,1,1,1,1,1,1,1,1]

export const  Home = () => {

    const { auth, restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth.user]);

  return (
    <div className="">
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">Taste Hub</p>
          <p className="z-10   text-gray-300 text-xl lg:text-4xl">
          Your passport to a world of culinary delights.
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <div className="">
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Top Meels
          </p>
          <MultiItemCarousal />
        </div>
      </section>
      <section className="px-5 lg:px-20">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-400 py-3 ">
            Order From Our Handpicked Favorites
          </h1>
          <div className="flex flex-wrap items-center justify-around ">
            {restaurant.restaurants.map((item, i) => (
              <RestaurantCard data={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}