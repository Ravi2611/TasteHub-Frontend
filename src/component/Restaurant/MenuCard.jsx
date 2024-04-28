import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography,
  } from "@mui/material";
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CheckBox } from '@mui/icons-material'
import { categorizeIngredients } from '../util/categorizeIngredients'
import { useDispatch } from 'react-redux'
import { addItemToCart, findCart } from "../State/Cart/Action";


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


export const MenuCard = ({item}) => {
    const dispatch = useDispatch();
  const [selectedIngredients, setSelectedIngredients] = useState([]);


  const handleCheckboxChange = (itemName) => {
    console.log("Entered Checkbox Change")
    if (selectedIngredients.includes(itemName)) {
      console.log("yes");
      setSelectedIngredients(
        // If already present than remove
        selectedIngredients.filter((item) => item !== itemName)
      );
    } else {
      console.log("no");
      setSelectedIngredients([...selectedIngredients, itemName]);
    }
//     const isSelected = selectedIngredients.includes(itemName);

//   // Create a new array based on selection state
//   const updatedIngredients = isSelected ? 
//     selectedIngredients.filter(item => item !== itemName) : 
//     [...selectedIngredients, itemName];

//   // Update state with the new array
//   setSelectedIngredients(updatedIngredients);
  };
  
  const handleAddItemToCart = (e) => {

    console.log("Selected ingredients: ", selectedIngredients)
    e.preventDefault();
    
    const data = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        foodId: item.id,
        quantity: 1,
        ingredientItems:selectedIngredients
      },
    };
    dispatch(addItemToCart(data));
  };
  

  return (
    <>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:space-x-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src={item.images[0]}
                alt=""
              />

              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{item.name}</p>
                <p>₹{item.price}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
            {/* <div>
        <Button onClick={handleAddItemToCart}>Add To Cart</Button>
      </div> */}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart} >
            <div className="flex gap-5 flex-wrap">
               {Object.keys(
                          categorizeIngredients(item?.ingredients)
                        )?.map((category) => (
              <div className="pr-5">
                
                <p>{category}</p>
                <FormGroup >
                  {categorizeIngredients(item.ingredients)[
                                category
                              ].map((ingredient, index) => (
                    <FormControlLabel
                      key={ingredient.id}
                      control={
                        <Checkbox
                          checked={selectedIngredients.includes(
                            ingredient.name
                          )}
                          onChange={() =>
                            handleCheckboxChange(ingredient.name)
                          }
                          disabled={!ingredient.inStock}
                        />
                      }
                      label={ingredient.name}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
            </div>
           

            <div className="pt-5">
              <Button variant="contained" disabled={!item.available} type="submit">
                {item.available?"Add To Cart":"Out of stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
