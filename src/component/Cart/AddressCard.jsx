import React from 'react'
import { Cart } from './Cart'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

export const AddressCard = ({item, showButton, handleSelectAddress}) => {
  return (
    <Card className='flex gap-5 w-64 p-5'>
        <HomeIcon/>
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Home</h1>
            <p>
                Siliguri, Himanchal Vihar, near passport office 734010, India
            </p>
            {
                showButton && (
                    <Button variant='outlined' fullWidth onClick={() => handleSelectAddress()}>Select</Button>
                )
            }
        </div>
    </Card>
  )
}
