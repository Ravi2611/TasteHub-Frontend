import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    email: "",
    password: ""
}


export const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (value) => {
        console.log(value)
    }
  return (
    <div>
        <Typography variant='h5' className='text-center'>
            Login
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field
                    as={TextField}
                    name="email"
                    label="email"
                    fullWidth
                    variant="outlined" 
                    margin="normal"
                />
                <Field
                    as={TextField}
                    name="password"
                    label="password"
                    fullWidth
                    variant="outlined" 
                    margin="normal"
                    type="password"
                />
                <Button sx={{mt:2, padding:"1rem"}} variant='contained' fullWidth type='submit'>Login</Button>
            </Form>
        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            Don't have an account?
            <Button size='small' onClick={() => navigate("/account/register")}>
                Register
            </Button>
        </Typography>
    </div>
  )
}
