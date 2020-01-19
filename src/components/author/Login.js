import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {LOGIN_AUTHOR} from '../../actions/types';

const Login = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    let history = useHistory();
    const handlerSubmit = e =>{
        e.preventDefault();
        dispatch({
            type: LOGIN_AUTHOR,
            payload: {
                author: name,
                isAuthenticated: true
            }
        });
        setName('');
        history.push('/')
    }
    return (
        <div>
           <form onSubmit={handlerSubmit}>
            <input type="text" placeholder="type your name" value={name}  onChange={e => setName(e.target.value)} required/>
            <input type="submit" value="Login"/> 
           </form> 
        </div>
    )
}

export default Login;