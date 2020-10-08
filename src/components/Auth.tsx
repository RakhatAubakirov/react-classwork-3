import React, { ReactElement } from 'react'
import { User } from '../models/User'
import Field from '../shared/Field'

interface Props {
    login:(user: User) => void,
    cancel:() => void
    
}

export default function Auth({login, cancel}: Props): ReactElement {

    let user: User = {id: 0, name : "", email : "", password: ""};

    

    return (
        <div className="auth">

            <Field
            type='text'
            label='Email'
            onChange={(e) => user.email = e.target.value}
            required
             />

            <Field
            type='text'
            label='Password'
            onChange={(e) => user.password = e.target.value}
            required
             />

            <div className="buttons">
                <button className="btn" onClick={cancel}>Cancel</button>
                <button className="btn" onClick={() => login(user)}>Submit</button>

            </div>
            
        </div>
    )
}
