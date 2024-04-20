import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img
                className='h-16 w-16' 
                src="https://cdn.pixabay.com/photo/2023/10/19/11/18/biryani-8326234_1280.jpg" 
                alt="order img"
            />
            <div>
                <p>
                    Biryani
                </p>
                <p>
                    ₹399
                </p>
            </div>
            <div>
                <Button className='cursor-not-allowed'>Completed</Button>
            </div>
        </div>
    </Card>
  )
}
