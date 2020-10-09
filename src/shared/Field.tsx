import React, { ChangeEvent, ReactElement } from 'react'
import "../App.css"

interface Props {
    label: string,
    type?: 'name' | 'password' | 'text',
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    // onSubmit: (e: ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
}

export default function Field({label, type, onChange, required}: Props): ReactElement {



    
    


    let inputType = ''

    if(type){
        inputType = type
    }

    
    
    return (
        <div className="field">
            <span>{label}</span>
            <input type={inputType} onChange={onChange} required={required} />
            
        </div>
    )
}
