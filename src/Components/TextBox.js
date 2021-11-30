import { TextField } from '@mui/material'
import React from 'react'
import { VARIANT } from '../Utils/Constants'
import { useStyles } from './Styles'

function TextBox({label, placeholder, helperText, error, value, onChange,  ...rest}) {
    const classes = useStyles()
    return (
       <TextField
       {...rest}
       helperText={helperText}
       error={error}
       value={value}
       onChange={onChange}
       className = {classes.root}
       variant={VARIANT.standard}
       label={label}
       placeholder={placeholder}
       />
    )
}

export default TextBox
