import React, { ChangeEvent, ReactElement } from 'react'
import "../App.css"
import { User } from '../models/User'

interface Props {
    label: string,
    type?: 'name' | 'password' | 'text',
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
}

export default function Field({label, type, onChange, required}: Props): ReactElement {

    let user: User = {id: 0, name : "", email : "", password: "", nameError: "", emailError: "", passwordError: ""};


    
    const validate = (user: User) => {

        let nameError = ""
        let emailError = ""
        let passwordError = ""
        //let required = true

        if(user.name.length === 0){
            user.nameError = "Name is required"
            return false
        }

        if(!user.email.includes('@') && user.email.length === 0){
            user.emailError = "Invalid email"
            return false

        }

        if(user.password.length < 8){
            user.passwordError = "Password must contain at least 8 symbols"
            return false

        }

        // if(nameError || emailError || passwordError){
        //     required = false

        // }
    
        return true

    };



    let inputType = ''

    if(type){
        inputType = type
    }

    if(!validate(user)){
        required = false;
    }
    
    return (
        <div className="field">
            <span>{label}</span>
            <input type={inputType} onChange={onChange} required={required} />
            
        </div>
    )
}
