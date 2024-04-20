import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuCard } from './MenuCard';

const categories = [
    "Pizza",
    "Biryani",
    "Burger",
    "Chicken",
    "Rice"
]

const foodTypes = [
    {
        label: "All", value: "all"
    },
    {
        label: "Vegetarian Only", value: "vegetarian"
    },
    {
        label: "Non-Vegetarian only", value: "non_vegetarian"
    },
    {
        label: "Seasonal", value: "seasonal"
    }
]


const menu = [1,1,1,1,1,1]

export const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }

  return (
    <div className='px-5 lg:px-20'>

        <section>
            <h3 className='text-gray-500 py-2 mt-10'> Home/India/Indian fast food/3 </h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} >

                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg'></img>

                    </Grid>
                    <Grid item xs={12} lg={6}>

                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2017/01/24/03/54/urban-2004494_1280.jpg'></img>

                    </Grid>
                    <Grid item xs={12} lg={6}>

                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_1280.jpg'></img>

                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'> Indian Fast food</h1>
                <p className='text-gray-500 mt-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat
                </p>
                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex item-center gap-3'>
                        <LocationOnIcon/>
                        <span>
                            Mumbai, Maharashtra
                        </span>
                    </p>     
                    <p className='text-gray-500 flex item-center gap-3'>
                        <CalendarTodayIcon/>
                        <span>
                            Monday - Friday - 11am - 9pm
                        </span>
                    </p>    
                </div>
                
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>

            <div className='space-y-10 lg:w-[20%] filter'>
                
                <div className='box space-y-5 lg:sticky top-28'>

                    <div>

                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType || "all"}>
                                {foodTypes.map((item) => (
                                    <FormControlLabel key={item.value} value = {item.value} control={<Radio/>} label={item.label}/>))}
                            </RadioGroup>
                        </FormControl>

                    </div>
                    
                    <Divider/>

                    <div>

                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType || "all"}>
                                {categories.map((item) => (
                                    <FormControlLabel key={item} value = {item} control={<Radio/>} label={item}/>))}
                            </RadioGroup>
                        </FormControl>

                    </div>

                </div>

            </div>

            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map((item) => <MenuCard/>)}
            </div>

        </section>
    </div>
  )
}
