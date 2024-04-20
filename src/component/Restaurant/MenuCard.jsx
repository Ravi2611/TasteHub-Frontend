import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CheckBox } from '@mui/icons-material'


const demo = [
    {
        category: "Nuts & Seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Paneer", "Bacon strips"]
    }
]


export const MenuCard = () => {
    const handleCheckBoxChange = (value) => {
        console.log("value")
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] h-[7rem] object-cover p-2 md:p-4 lg:p-6' src='https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg' />
                    </div>
                    <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'> Burger </p>
                        <p>₹499</p>
                        <p className='text-gray-400'>
                            Nice food
                        </p>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            demo.map((item) => (
                                <div >
                                    <p>
                                        {item.category}
                                    </p>
                                    <FormGroup>
                                        {item.ingredients.map((item) => (
                                            <FormControlLabel control={<CheckBox onChange={() => handleCheckBoxChange(item)} />} label={item} />
                                        ))}

                                    </FormGroup>
                                </div>
                            )
                            )
                        }
                    </div>

                    <div className='pt-5'>
                        <Button variant='contained' disabled={false} type='submit'>{true ? "Add to Cart" : "Out of Stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}
