import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    email: "",
    password: "",
    fullName: "",
    role: "ROLE_CUSTOMER"
}

export const RegisterForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (value) => {
        console.log(value)
    }
  return (
    <div>
        <Typography variant='h5' className='text-center'>
            Register
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field
                    as={TextField}
                    name="fullName"
                    label="fullName"
                    fullWidth
                    variant="outlined" 
                    margin="normal"
                />
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
                    <Field
                        fullWidth
                        margin="normal"
                        as={Select}
                        labelId="role-simple-select-label"
                        id="role-simple-select"
                        name="role"
                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                    </Field>
                <Button sx={{mt:2, padding:"1rem"}} variant='contained' fullWidth type='submit'>Register</Button>
            </Form>
        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            Already have an account?
            <Button size='small' onClick={() => navigate("/account/login")}>
                Login
            </Button>
        </Typography>
    </div>
  )
}
