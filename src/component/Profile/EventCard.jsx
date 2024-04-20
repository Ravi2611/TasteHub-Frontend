import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia 
                sx={{height:345}}
                image='https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_1280.jpg'    
            />
            <CardContent>
                <Typography variant='h5' component={'div'}>
                    Indian Food Festival
                </Typography>
                <Typography variant='h5' component={'div'}>
                    50% off on first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"Gurgaon"}</p>
                    <p className='text-sm text-blue-500'>April 1, 2024, 12:00 pm</p>
                    <p className='text-sm text-red-500'>April 3, 2024, 12:00 am</p>
                </div>
            </CardContent>
            {
                true && 
                <CardActions>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
            }
        </Card>
    </div>
  )
}
