import { Chip, IconButton, Card } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const RestaurantCard = () => {
    return (
        <Card className='w-[18rem]'>

            <div className={`${true ? 'cursor-pointer':"cursor-not-allowed"} relative`}>
                <img
                    className='w-full h-[10rem] rounded-t-md object-cover'
                    src='https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_1280.jpg'
                    alt=''
                />
                <Chip
                    size='small'
                    className='absolute top-2 left-2'
                    color={true ? 'success' : 'error'}
                    label={true ? 'open' : 'closed'}
                />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg'>
                        Indian Fast Food
                    </p>
                    <p className='text-gray-500 text-sm'>
                        Craving it all????
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}
